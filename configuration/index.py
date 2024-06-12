import sys
import os
import yaml

sys.path.append(".")

def getYaml(nome_arquivo_yaml, variavel, index=None):
    if not os.path.exists(nome_arquivo_yaml):
        print("Erro:", "Arquivo YAML não encontrado")
        return None
    
    with open(nome_arquivo_yaml, 'r') as arquivo:
        conteudo = yaml.safe_load(arquivo)
        
        # Verifica se a variável existe no arquivo YAML
        if variavel not in conteudo:
            print(f"Erro: A variável '{variavel}' não foi encontrada no arquivo YAML")
            return None
        
        # Retorna o valor da variável conforme a necessidade
        if isinstance(conteudo[variavel], list):
            if index is not None and 0 <= index < len(conteudo[variavel]):
                return conteudo[variavel][index]
            else:
                return conteudo[variavel]
        else:
            return conteudo[variavel]

def putYaml(nome_arquivo_yaml, variavel, novo_valor, index=None):
    if not os.path.exists(nome_arquivo_yaml):
        print("Erro:", "Arquivo YAML não encontrado")
        return False
    
    with open(nome_arquivo_yaml, 'r') as arquivo:
        conteudo = yaml.safe_load(arquivo)
        
        # Verifica se a variável existe no arquivo YAML
        if variavel not in conteudo:
            print(f"Erro: A variável '{variavel}' não foi encontrada no arquivo YAML")
            return False
        
        # Modifica o valor da variável conforme a necessidade
        if isinstance(conteudo[variavel], list):
            if index is not None and 0 <= index < len(conteudo[variavel]):
                conteudo[variavel][index] = novo_valor
            else:
                conteudo[variavel] = novo_valor
        else:
            conteudo[variavel] = novo_valor

    # Escreve as alterações de volta no arquivo YAML
    with open(nome_arquivo_yaml, 'w') as arquivo:
        yaml.dump(conteudo, arquivo, default_flow_style=False)
    
    return True

# Exemplo de uso:
# valor = getYaml("arquivo.yaml", "url", index=0)
# print(valor)

# putYaml("arquivo.yaml", "url", "https://novovalor.com")
# putYaml("arquivo.yaml", "lista_de_urls", "https://novovalor.com", index=1)
