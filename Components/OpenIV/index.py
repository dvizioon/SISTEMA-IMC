import sys
sys.path.append(".")
import re

from flask import request, jsonify
from Components.OpenIV.auth.Modules.DataVw import ModulesIA
import json
import requests


def openVision():
    
    def generate_fake_user_agents(num_agents):
        user_agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/89.0",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/88.0",
            "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
            "Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
            "Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Mobile Safari/537.36",
            "Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36",
            "Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36"
        ]
        
        
        if num_agents > len(user_agents):
            num_repeats = num_agents // len(user_agents) + 1
            user_agents *= num_repeats
        
        return user_agents[:num_agents]

    fake_user_agents = generate_fake_user_agents(10)
    
    for agent in fake_user_agents:
        # print(agent)
        user_agent = agent

    module = ModulesIA("AuthPath")
    resultado = module.render()
    
    if resultado:
        try:
            resultado_dict = json.loads(resultado)
        except json.JSONDecodeError as e:
            return jsonify({"error": "Erro ao decodificar o JSON"}), 400
        
        resultado_dict["User-Agent"] = user_agent
        resultado_json = json.dumps(resultado_dict)
        
        # Extrair dados da solicitação POST
        request_data = request.get_json()
        
        if request_data and 'altura' in request_data and 'peso' in request_data and 'tipo'  and 'imc' in request_data :
            tipo = request_data['tipo']
            altura = request_data['altura']
            peso = request_data['peso']
            imc = request_data['imc']
            askQuestion = request_data.get('question', None)  # Use .get para tornar "question" opcional
            
        else:
            altura = None
            peso = None
        
        if altura is not None and peso is not None and tipo is not None:
            # Construir a pergunta com base nos dados recebidos
            if tipo == "atividadeFisica":
                    Question = f"""
                    Considerando uma pessoa com as seguintes características:
                    - Altura: {altura} cm
                    - Peso: {peso} kg

                    Quais seriam as atividades físicas recomendadas para ela alcançar o peso ideal?
                    Com os Seguintes Topicos 
                    
                    -Atividades Recomendadas 
                    -Horarios das Atividades
                """
            elif tipo == "refeicao":
                 Question = f"""
                    Considerando uma pessoa com as seguintes características:
                    - Altura: {altura} cm
                    - Peso: {peso} kg
                    - IMC : {imc}

                    Quais seriam a alimentação aquedada recomendadas para essa pessoa? quero em Forma de Lista 
                    Com os Seguintes Topicos 
                    
                    -Refeição Saudaves 
                    -Horarios das Refeições
                """
            elif tipo == "ask":
               Question = f"""
                    Seu nome agora é Nanda (BOT)
                     
                    verifique_essa_Pergunta (Não Precisa Mostrar a Pergunta): -"{askQuestion}"

                    Contexto Exclusivo: Atividades Físicas, Saúde e Alimentação Saudável 

                    Sua tarefa é fornecer respostas detalhadas e informativas sobre os seguintes tópicos:
                    
                    1. **Alimentação Saudável**:
                    2. **Atividades Físicas**:
                    3. **Saúde**:
                    4. **Seu Nome**:
                    
                    Coisas Proibidas que você tem que dar Erro:
                    1. o usuário querer codigos, de qualuqer tipo 
                    2. o usuário querer fazer atividades escolares
                    3. o usuário quer coisas contidianas.
                    
                    além disso é importante você verificar, se a pergunta tem o contexto, ou a palavra chave (Não Precisa Mostrar)

                    Caso a pergunta não esteja relacionada a Alimentação Saudável, Atividades Físicas ou Saúde,ou se Pergunta sobre você, se não tiver esse contexto, responda com a seguinte mensagem:
                    
                    - "Desculpe, mas não posso ajudar com isso, pois está fora do contexto."

                """

            else:
                Question = "menssagem de erro fora do scopo"

        else:
            # Pergunta padrão se os dados de altura e peso não foram fornecidos corretamente
            Question = "Qual a sua pergunta?"
        
        data = {
            "messages": [{"content": Question, "role": "user"}],
            "previewToken": None,
            "userId": "6e75da85-5501-4825-ae6b-cd19543d582c",
            "codeModelMode": True,
            "agentMode": {},
            "trendingAgentMode": {},
            "isMicMode": False,
            "isChromeExt": False,
            "githubToken": None
        }

        try:
            # for agent in fake_user_agents:
            headers = {
                "Content-Type": "application/json",
                "User-Agent": user_agent
            }
            
            # Enviar a requisição POST com os dados e cabeçalhos corretos
            # chatRequest = requests.post("https://www.blackbox.ai/api/chat", headers=headers, json=data)
            # chatRequest.raise_for_status()
            
            # formatted_content = chatRequest.content.decode('utf-8')
            # response_data = {
            #     "response": formatted_content
            # }
            
            # # Redirecionar para a rota '/imc' com os parâmetros de altura e peso
            # return jsonify(response_data), 200

            # Faça a solicitação para o serviço de chat
            chatRequest = requests.post("https://www.blackbox.ai/api/chat", headers=headers, json=data)
            chatRequest.raise_for_status()

            # Decodifique o conteúdo da resposta para texto UTF-8
            formatted_content = chatRequest.content.decode('utf-8')

            # Use expressões regulares para remover o padrão "$@$v=undefined-rv1$@$"
            cleaned_content = re.sub(r'\$@\$', '', formatted_content)
            cleaned_content = re.sub(r'(\$@\$(?:v=.+?)?\$@\$(?:v=.+?)?)|v=undefined-rv1', '', cleaned_content)
            cleaned_content = re.sub(r'v=undefined-rv1', '', cleaned_content)
            cleaned_content = re.sub(r'\$\@\$', '', cleaned_content)
            cleaned_content = re.sub(r'v=.*?rv1', '', cleaned_content)
            cleaned_content  = re.sub(r'v=.*?-rv1', '', cleaned_content)
            cleaned_content  = re.sub(r'\$@\$*', '', cleaned_content )

            # Construa o objeto de resposta com o conteúdo limpo
            response_data = {
                "response": cleaned_content.strip()  # Remova espaços em branco adicionais
            }

            # Retorne a resposta limpa para o cliente
            return jsonify(response_data), 200

                        
        except requests.exceptions.RequestException as e:
            module = ModulesIA("Auth")
            module.render()
            return jsonify({"error": f"Erro na requisição: {e}"}), 500
    
    else:
        return jsonify({"error": "Nenhum resultado disponível"}), 404
