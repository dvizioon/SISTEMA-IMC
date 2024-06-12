
import sys
import os
import json
import os
import configparser
sys.path.append(".")

from .Cookie import CriarAuth

class ModulesIA:
    def __init__(self, name):
        self.nome = name
        
    def struct(self, method):
        if method == "Auth":
            print("Criando Novo Ponto de Autenticação...Sucesso")
            return CriarAuth()  # Retorna o resultado da criação do Auth
        elif method == "AuthPath":
            config = configparser.ConfigParser()
            config.read('Config.ini')
            caminho_auth = config['Paths']['PATH_AUTH']

            if not os.path.exists(caminho_auth):
                os.makedirs(caminho_auth)
                return CriarAuth()  # Retorna o resultado da criação do Auth
            else:
                with open(f'{caminho_auth}/Auth.json', 'r') as file:
                    auth_data = json.load(file)
                auth_json = json.dumps(auth_data)
                return auth_json  # Retorna os dados do arquivo Auth.json como JSON
            
        elif method == "CreatIni":
            if not os.path.isfile('Config.ini'):
                with open('Config.ini', 'w') as f:
                    contentIni = """

[Config]
PORT = 5678
HOST = 127.0.0.1
PROXY = 443

[Paths]
PATH_AUTH = Components/Modules/Config
PATH_JSON = Components/Modules/Config/Auth.json
                   
                    """
                    f.write(contentIni)
                    print("Arquivo de configuração Config.ini criado com sucesso.")
                    return "Arquivo de configuração Config.ini criado com sucesso."
            else:
                return "O arquivo de configuração Config.ini já existe."

    def render(self):
        if self.nome:
            return self.struct(self.nome)  # Chama o método struct e retorna o resultado
        return None

# Exemplo de uso:
# module = ModulesIA("CreatIni")
# resultado = module.render()
# if resultado:
#     print(resultado)
