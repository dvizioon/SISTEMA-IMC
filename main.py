from flask import Flask, render_template, request, jsonify,send_from_directory,send_file
import os
import requests
import json
from threading import Thread
from io import BytesIO
import base64
import random
from gtts import gTTS

from Components.OpenIV.index import openVision

from Components.Tables.index import table_imc
from Components.Card.index import card_infomation
from Components.Form.index import Form_imc

from Modules.readYaml.index import LerYaml

from database.index import BancoDadosSQLite
from database.Controller import ControllerTable

from configuration.index import getYaml , putYaml

createdDb =  LerYaml(".Yaml","database",index=0)
nome_banco = f"{LerYaml('.Yaml','database',index=1)}.db"
if(createdDb):
    banco = BancoDadosSQLite(nome_banco)
    banco.criar_banco_e_tabelas()

else:
    pass

controller_data = ControllerTable(nome_banco)
if controller_data.verificar_existencia_banco():
    controller_data.conectar()
else:
    print("Erro: O banco de dados não existe.")

modelo = LerYaml(".Yaml","openAI",index=0)

app = Flask(__name__, static_url_path='')
arquivos_audio = {}

def modelAI():
    Ai = LerYaml(".Yaml","openAI",index=0)
    
    if Ai == "OpenIV":
        return openVision()
    elif Ai == "PHI3":
        return jsonify({"Model => PHI-3":"404" , "Disponiveis":"*OpenAi","Instalar":"https://ollama.com/library/phi3"})


def create_sound_api(texts):
    url_audio = f"{LerYaml('.Yaml','server',index=0)}://{LerYaml('.Yaml','configuration',index=0)}:{LerYaml('.Yaml','configuration',index=1)}/api/audios"
    data = {'texts': texts}
    headers = {'Content-Type': 'application/json'}

    try:
        response = requests.post(url_audio, data=json.dumps(data), headers=headers)
        response.raise_for_status() 

        audio_data = response.json()
        return audio_data

    except requests.exceptions.RequestException as e:
        print("Erro ao fazer a solicitação:", e)
        return None

def calcular_imc(altura, peso):
    altura = str(altura).replace(',', '.')
    altura = float(altura)
    if altura > 10:
        altura = altura / 100
    imc = peso / (altura ** 2)
    return round(imc, 2)  

def calcular_peso_ideal(altura, peso_atual, imc_atual, metodo):
    if metodo == "Diferencial":
        peso_ideal = altura - 100
    elif metodo == "Robusto":
        peso_ideal = altura - 100
    else:
        peso_ideal = altura - 100
    
    diferenca = peso_ideal - peso_atual
    porcentagem_falta = (diferenca / peso_ideal) * 100

    return round(peso_ideal, 2), round(porcentagem_falta, 2)

def calculo_peso_ideal(altura, peso_atual, imc_atual):
    resultado = {}
    resultado['altura'] = round(altura, 2)
    resultado['peso_atual'] = round(peso_atual, 2)
    resultado['imc_atual'] = round(imc_atual, 2)

    if imc_atual > 24:
    
        peso_necessario = 24 * (altura ** 2)
        peso_a_perder = peso_atual - peso_necessario
        resultado['status'] = 'acima do ideal'
        resultado['peso_ideal'] = round(peso_necessario, 2)
        resultado['peso_a_ajustar'] = round(peso_a_perder, 2)
        resultado['porcentagem_ajuste'] = round((peso_a_perder / peso_atual) * 100, 2)
      
    elif imc_atual < 18:
 
        peso_necessario = 18 * (altura ** 2)
        peso_a_ganhar = peso_necessario - peso_atual
        resultado['status'] = 'abaixo do ideal'
        resultado['peso_ideal'] = round(peso_necessario, 2)
        resultado['peso_a_ajustar'] = round(peso_a_ganhar, 2)
        resultado['porcentagem_ajuste'] = round((peso_a_ganhar / peso_atual) * 100, 2)
     
    else:
        resultado['status'] = 'dentro do ideal'
        resultado['peso_ideal'] = round(peso_atual, 2)
        resultado['peso_a_ajustar'] = 0
        resultado['porcentagem_ajuste'] = 0

    # Formatar os resultados no formato desejado
    resultado_formatado = {
        'categoria': resultado['status'],
        'imc': resultado['imc_atual'],
        'peso_ideal': resultado['peso_ideal'],
        'altura': resultado['altura'],
        'imc_atual': resultado['imc_atual'],
        'peso_a_ajustar': resultado['peso_a_ajustar'],
        'peso_atual': resultado['peso_atual'],
        'porcentagem_ajuste': resultado['porcentagem_ajuste']
    }

    return resultado_formatado

def calcular_peso_ideal(altura, peso_atual, imc_atual , metodo):
  
    if metodo == "Diferencial":
        resultado =  calculo_peso_ideal(altura, peso_atual, imc_atual)
    elif metodo == "Robusto":
        resultado =  calculo_peso_ideal(altura, peso_atual, imc_atual)
    else:
        resultado =  calculo_peso_ideal(altura, peso_atual, imc_atual)
    
    return resultado

def enviar_requisicao(altura, peso,imc,tipo):
    url = f"{LerYaml('.Yaml','server',index=0)}://{LerYaml('.Yaml','configuration',index=0)}:{LerYaml('.Yaml','configuration',index=1)}/api/model/{modelo}"
    headers = {'Content-Type': 'application/json'}
    
    '''
         {
             "altura": 170,
             "peso": 70,
             "tipo": "atividadeFisica",
             "imc": 24.2
         }

         {
             "altura": 170,
             "peso": 70,
             "tipo": "refeicao",
             "imc": 24.2
         }
         
         {
            "response": "$@$v=v1.13$@$Considerando as características da pessoa (altura: 170 cm e peso: 70 kg), o Índice de Massa Corporal (IMC) seria de aproximadamente 24,2, o que indica que ela está dentro do peso normal.\n\nPara alcançar o peso ideal, é importante combinar uma alimentação saudável com atividades físicas regulares. Aqui estão algumas recomendações de atividades físicas que podem ajudar:\n\n1. **Aeróbicas**: Atividades aeróbicas, como caminhar, correr, nadar ou andar de bicicleta, são excelentes para queimar calorias e melhorar a saúde cardiovascular. A pessoa pode começar com 30 minutos por dia, 3 a 4 vezes por semana, e aumentar gradualmente a duração e frequência.\n2. **Treinamento de força**: O treinamento de força pode ajudar a construir massa muscular, o que pode aumentar o metabolismo e ajudar a perder peso. A pessoa pode começar com exercícios de força 2 a 3 vezes por semana, focando em exercícios que trabalhem diferentes grupos musculares, como flexões, agachamentos, levantamentos de peso e exercícios de braço.\n3. **Yoga ou Pilates**: Atividades como yoga ou Pilates podem ajudar a melhorar a flexibilidade, equilíbrio e força, além de reduzir o estresse. A pessoa pode começar com 2 a 3 sessões por semana.\n4. **High-Intensity Interval Training (HIIT)**: O HIIT é uma forma de treinamento que envolve intervalos curtos de exercícios intensos, seguidos de períodos de descanso. Isso pode ser uma forma eficaz de queimar calorias e melhorar a saúde cardiovascular.\n5. **Atividades diárias**: Além de atividades físicas específicas, é importante incentivar a pessoa a ser mais ativa em sua vida diária, como subir escadas em vez de usar o elevador, caminhar em vez de dirigir, ou fazer exercícios durante os comerciais da TV.\n\nLembre-se de que é importante consultar um médico ou um profissional de saúde antes de iniciar qualquer programa de exercícios, especialmente se a pessoa tiver alguma condição médica ou lesão.\n\nAlém disso, é fundamental lembrar que a perda de peso saudável é de 0,5 a 1 kg por semana. Portanto, é importante que a pessoa combine essas atividades físicas com uma alimentação saudável e equilibrada para alcançar o peso ideal de forma sustentável."
            }
    
    '''
    
    dados = {
        "altura": altura,
        "peso": peso,
        "tipo":tipo,
        "imc":imc
    }
    response = requests.post(url, headers=headers, data=json.dumps(dados))
    return response.json()

def obter_recomendacoes(altura,peso,imc):
    
    atividades_indicadas = []
    refeicoes_horario = []
    if imc < 18.5:
        atividades_indicadas = enviar_requisicao(altura,peso,imc,"atividadeFisica")
        refeicoes_horario = enviar_requisicao(altura,peso,imc,"refeicao")
    elif 18.5 <= imc < 24.9:
        atividades_indicadas = enviar_requisicao(altura,peso,imc,"atividadeFisica")
        refeicoes_horario = enviar_requisicao(altura,peso,imc,"refeicao")
    elif 24.9 <= imc < 29.9:
        atividades_indicadas = enviar_requisicao(altura,peso,imc,"atividadeFisica")
        refeicoes_horario = enviar_requisicao(altura,peso,imc,"refeicao")
    else:
        atividades_indicadas = enviar_requisicao(altura,peso,imc,"atividadeFisica")
        refeicoes_horario = enviar_requisicao(altura,peso,imc,"refeicao")
    recomendacoes = {"atividades_indicadas": atividades_indicadas, "refeicoes_horario": refeicoes_horario}
    return recomendacoes

def calcular_Imc():
    data = request.get_json()
    altura = float(data['altura'])
    peso = float(data['peso'])
    metodo = data['metodo']  # Normal | Diferencial | Robusto

    imc = calcular_imc(altura, peso)
    imc_arredondado = round(imc, 2)

    categoria = ""
    if imc_arredondado < 18.5:
        categoria = "Magreza"
    elif imc_arredondado < 24.9:
        categoria = "Normal"
    elif imc_arredondado < 29.9:
        categoria = "Sobrepeso"
    else:
        categoria = "Obesidade"

    resultado = {'imc': imc_arredondado, 'categoria': categoria,'altura':altura}
    
    myMetodoPeso = str(peso).replace(',', '.')
    
    if metodo == "Diferencial" or metodo == "Robusto":
        peso_ideal = calcular_peso_ideal(float(altura), float(myMetodoPeso), imc, metodo)
        resultado['peso_ideal'] = peso_ideal

    if metodo == "Robusto":
        recomendacoes = obter_recomendacoes(altura, peso, imc_arredondado)
        resultado['recomendacoes'] = recomendacoes

    atividades_indicadas = ''
    refeicoes_horario = ''

    if 'recomendacoes' in resultado:
        recomendacoes = resultado['recomendacoes']
        atividades_indicadas = recomendacoes.get('atividades_indicadas', {}).get('response', '')
        refeicoes_horario = recomendacoes.get('refeicoes_horario', {}).get('response', '')

        pre_processamento_Sounds = LerYaml(".Yaml","sounds",index=0)

        if pre_processamento_Sounds == 'true':
            if atividades_indicadas and refeicoes_horario:
                create_sound_api([refeicoes_horario, atividades_indicadas])
        else:
            messages = [
                'Por favor, ative essa funcionalidade nas configurações. Ela ainda está em desenvolvimento, e é importante notar que isso pode afetar o desempenho do servidor.',
                'Para utilizar o módulo de áudio, é necessário ativá-lo nas configurações. Tenha em mente que isso pode impactar no pré-processamento do servidor.'
            ]

            mensagem = random.choice(messages)
            create_sound_api([mensagem, mensagem])


    return jsonify(resultado)

'''
    Rotas da Aplicaçao para as Paginas dentro da Template
'''
def Splash():

    return render_template(
        "Splash/index.html"
    )

def Home():
    card_imc = card_infomation()

    return render_template(
        "Home/index.html", 
        card=card_imc,
    )
    
def About():
    tabela_imc = table_imc()

    return render_template(
        "About/index.html", 
        table=tabela_imc,
    )
    
def Calcular():
    form_imc = Form_imc()
    return render_template(
        "Calcular/index.html",
        form = form_imc   
    )
    
def Config():
    return render_template(
        "Config/index.html"
    )
        
def DataBase():
    
    return render_template(
        "Banco/index.html", 
    )
    
def Music():
    
    return render_template(
        "Music/index.html", 
    )
      
def Chat():
    
    return render_template(
        "Chat/index.html", 
    )
    
    
    
class PersistentBytesIO(BytesIO):
    def close(self):
        pass

def create_sound(text):
    tts = gTTS(text=text, lang=f"{LerYaml('.Yaml','sounds',index=2)}")
    audio_fp = PersistentBytesIO()
    tts.write_to_fp(audio_fp)
    audio_fp.seek(0)
    return audio_fp

audio_files = {}  
def createSound():
    data = request.get_json()
    texts = data.get('texts', [])

    if not texts:
        return jsonify({"error": "No texts provided"}), 400

    for i, text in enumerate(texts):
        audio_fp = create_sound(text)
        key = f"audio_{i + 1}"
        audio_files[key] = audio_fp

    response = {key: f"/api/audio/{key}" for key in audio_files.keys()}
    return jsonify(response)

def getSound(audio_key):
    audio_fp = audio_files.get(audio_key)
    if audio_fp:
        audio_fp.seek(0)
        return send_file(audio_fp, mimetype="audio/mpeg")
    else:
        return jsonify({"error": "Audio not found"}), 404
    
def GetUsuarioDb():
    global controller_data
    controller_data.conectar()
    # Listar registros da tabela 'dados_usuarios'
    registros = controller_data.listar_registros('dados_usuarios')

    if registros is not None:
        # Se registros não for None, iterar sobre eles e formatar para o formato desejado
        usuarios = []
        for registro in registros:
            usuario = {
                "id":registro[0],
                "imc": json.loads(registro[1]),
                "peso_ideal": json.loads(registro[2]),
                "recomendacoes": json.loads(registro[3])
            }
            usuarios.append(usuario)

        controller_data.fechar_conexao()
        return jsonify(usuarios)
    else:
        controller_data.fechar_conexao()
        # Se registros for None, retornar uma mensagem de erro
        return jsonify({"error": "Não foi possível listar os registros da tabela 'dados_usuarios'."})

def CreateUsuarioDb():
    global controller_data
    controller_data.conectar()

    try:
        # Receber dados do body da requisição
        data = request.get_json()

        imc_json = json.dumps(data['imc'])
        peso_ideal_json = json.dumps(data['peso_ideal'])
        recomendacoes_json = json.dumps(data['recomendacoes'])

        # Inserir registro na tabela
        controller_data.inserir_registro('dados_usuarios', imc_json, peso_ideal_json, recomendacoes_json)

        controller_data.fechar_conexao()
        return jsonify({"success": "Registro inserido com sucesso."}), 201
    except Exception as e:
        controller_data.fechar_conexao()
        return jsonify({"error": str(e)}), 500
    
def DeleteUsuarioDb(id_registro):
    global controller_data
    controller_data.conectar()

    try:
        controller_data.deletar_registro('dados_usuarios', id_registro)
        controller_data.fechar_conexao()
        return jsonify({"success": f"Registro com ID {id_registro} deletado com sucesso."}), 200
    except Exception as e:
        controller_data.fechar_conexao()
        return jsonify({"error": str(e)}), 500
   
def ConfigurationYaml():
    if request.method == 'GET':
        # Se a solicitação for GET, o usuário está solicitando o valor da variável
        nome_variavel = request.args.get('nome_variavel')
        index = int(request.args.get('index', default=0))
        valor_atual = getYaml(".Yaml", nome_variavel, index=index)
        return jsonify({nome_variavel: valor_atual})
    elif request.method == 'POST':
        # Se a solicitação for POST, o usuário está enviando uma nova configuração
        nome_variavel = request.form['nome_variavel']
        novo_valor = request.form['novo_valor']
        index = int(request.form.get('index', default=0))
        putYaml(".Yaml", nome_variavel, novo_valor, index=index)
        return jsonify({"mensagem": "Configuração atualizada com sucesso!"})

 
rotas = [
    {"url": "/", "method": ["GET"], "function": Home},
    {"url": "/splash", "method": ["GET"], "function": Splash},
    {"url": "/about", "method": ["GET"], "function": About},
    {"url": "/music", "method": ["GET"], "function": Music},
    {"url": "/chat", "method": ["GET"], "function": Chat},
    {"url": "/calcular", "method": ["GET","POST"], "function": Calcular},
    {"url": "/config", "method": ["GET","POST"], "function": Config},
    {"url": "/banco", "method": ["GET","POST"], "function": DataBase},
    {"url": "/calcular_imc", "method": ["POST"], "function": calcular_Imc},
    {"url": f"/api/model/{modelo}", "method": ["POST"], "function": modelAI},
    {"url": f"/api/audios", "method": ["POST"], "function": createSound},
    {"url": f"/api/audio/<audio_key>", "method": ["GET"], "function":getSound},
    {"url": f"/database/show", "method": ["GET"], "function":GetUsuarioDb},
    {"url": f"/database/create", "method": ["POST"], "function":CreateUsuarioDb},
    {"url": f"/database/delete/<int:id_registro>", "method": ["DELETE"], "function":DeleteUsuarioDb},
    {"url": f"/configuration", "method": ["GET","POST"], "function":ConfigurationYaml},

]

for rota in rotas:
    app.route(rota['url'], methods=rota['method'])(rota['function'])


@app.route('/plugins/<path:filename>')
def PluginsStatics(filename):
    return send_from_directory(os.path.join('plugins'), filename)

@app.route('/Assets/<path:filename>')
def AssetStatics(filename):
    return send_from_directory(os.path.join('assets'), filename)


if __name__ == "__main__":
    # Execute o Flask e o Eel em threads separadas
    app.run(host=LerYaml(".Yaml","configuration",index=0),port=LerYaml(".Yaml","configuration",index=1), debug=LerYaml(".Yaml","debug",index=0), use_reloader=False)
