# BancoDadosSQLite->

# Exemplo de uso:
nome_banco = 'exemplo.db'

# Criar instância do banco de dados
banco = BancoDadosSQLite(nome_banco)

# Criar banco de dados e tabelas
banco.criar_banco_e_tabelas()

=============

# ControllerTable ->

# Exemplo de uso:
nome_banco = 'exemplo.db'

# Criar instância do controlador
controller = ControllerTable(nome_banco)

# Conectar ao banco de dados
controller.conectar()

# Listar registros da tabela
registros = controller.listar_registros('dados_usuarios')
print("Registros na tabela 'dados_usuarios':")
for registro in registros:
    print(registro)

# Inserir registro na tabela
imc = '{"altura": 1.75, "peso": 70}'
peso_ideal = '{"altura": 1.75, "categoria": "normal", "peso_ideal": 70}'
recomendacoes = '{"atividades_indicadas": "Fazer exercícios regularmente", "refeicoes_horario": "Manter horários regulares para refeições"}'
controller.inserir_registro('dados_usuarios', imc, peso_ideal, recomendacoes)

# Atualizar registro na tabela
id_registro = 1
imc = '{"altura": 1.80, "peso": 75}'
peso_ideal = '{"altura": 1.80, "categoria": "normal", "peso_ideal": 72}'
recomendacoes = '{"atividades_indicadas": "Fazer exercícios regularmente", "refeicoes_horario": "Manter horários regulares para refeições"}'
controller.atualizar_registro('dados_usuarios', id_registro, imc, peso_ideal, recomendacoes)

# Deletar registro na tabela
id_registro_deletar = 1
controller.deletar_registro('dados_usuarios', id_registro_deletar)
