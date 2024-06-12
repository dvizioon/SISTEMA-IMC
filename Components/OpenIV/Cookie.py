import json
import os
import requests
import configparser

def CriarAuth():
    response = requests.post("https://www.blackbox.ai/")
    
    config = configparser.ConfigParser()
    config.read('Config.ini')
    caminho_save_json = config['Paths']['PATH_JSON']
    # print(caminho_save_json);

    if response.status_code == 200:
        # print("Cookies:", response.headers)
        # print("Session:", response.cookies)
        # print("History:", response.history)
        # print("Encoding:", response.encoding)
        
        with open(f"{caminho_save_json}", "w") as f:
            json.dump(dict(response.headers), f, indent=4)
        print("Autenticação Salva com Sucesso")
    else:
        print("Failed to fetch cookies. Status code:", response.status_code)

# CriarAuth();