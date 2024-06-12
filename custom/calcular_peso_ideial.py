def calcular_peso_ideal(altura, peso_atual, imc_atual):
    resultado = {}
    resultado['altura'] = round(altura, 2)
    resultado['peso_atual'] = round(peso_atual, 2)
    resultado['imc_atual'] = round(imc_atual, 2)

    if imc_atual > 24:
        # Calcular o peso necessário para o IMC máximo ideal
        peso_necessario = 24 * (altura ** 2)
        peso_a_perder = peso_atual - peso_necessario
        resultado['status'] = 'acima do ideal'
        resultado['peso_ideal'] = round(peso_necessario, 2)
        resultado['peso_a_ajustar'] = round(peso_a_perder, 2)
        resultado['porcentagem_ajuste'] = round((peso_a_perder / peso_atual) * 100, 2)
      
    elif imc_atual < 18:
        # Calcular o peso necessário para o IMC mínimo ideal
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

# Exemplo de uso da função
resultado = calcular_peso_ideal(1.80, 80, 24.69)
print(resultado)
