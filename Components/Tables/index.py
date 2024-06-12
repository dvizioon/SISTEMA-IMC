import sys
sys.path.append(".")

from Modules.customTable.index import CustomTable

def table_imc():
    headers = ['IMC (KG/m2)', 'Classificação', 'Risco para Saúde']
    rows = [
        ['Menos que 18,5', 'Baixo Peso', 'Baixo - Moderado'],
        ['18.5 e 24.9', 'Peso Normal', 'Baixo'],
        ['25.0 e 29.9', 'Sobrepeso', 'Moderado - Alto'],
        ['30.0 e 34.9', 'Obesidade Grau I', 'Alto'],
        ['35.0 e 39.9', 'Obesidade Grau II', 'Muito Alto'],
        ['40.0 e acima', 'Obesidade Grau III', 'Extremamente Alto']
    ]

    html_table = CustomTable(headers, rows)
    
    return html_table

# # Exemplo de uso
# if __name__ == "__main__":
#     html_table = table_imc()
#     print(html_table) 
