import sys
import os
import yaml

sys.path.append(".")

def LerYaml(nome_arquivo_yaml, variavel, index=None):
    if not os.path.exists(nome_arquivo_yaml):
        print("Erro", "Arquivo YAML não encontrado")
        return None
    
    with open(nome_arquivo_yaml, 'r') as arquivo:
        conteudo = yaml.safe_load(arquivo)
        valor = conteudo.get(variavel)
        
        if valor is None:
            print("Erro", f"A variável '{variavel}' não foi encontrada no arquivo YAML")
            return None
        
        if isinstance(valor, list):
            if index is not None:
                return valor[index] if 0 <= index < len(valor) else None
            else:
                return valor[0] if len(valor) == 1 else valor
        else:
            return valor

# Exemplo de uso:
# url = LerYaml("arquivo.yaml", "url")
# print(url)

# url2 = LerYaml("arquivo.yaml", "url", index=1)  # Retorna o segundo elemento da lista na seção "url"
# print(url2)