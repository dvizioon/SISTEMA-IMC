import sqlite3
import os
import sys

sys.path.append(".")

class BancoDadosSQLite:
    def __init__(self, nome_banco):
        self.nome_banco = nome_banco
        self.caminho_banco = os.path.join('database', self.nome_banco)
        self.conn = None

    def conectar(self):
        try:
            self.conn = sqlite3.connect(self.caminho_banco)
            print(f"Conexão com o banco de dados '{self.caminho_banco}' estabelecida com sucesso.")
        except sqlite3.Error as e:
            print(f"Erro ao conectar ao banco de dados: {e}")

    def verificar_existencia_banco(self):
        if os.path.exists(self.caminho_banco):
            return True
        else:
            return False

    def criar_tabelas(self):
        try:
            cursor = self.conn.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS dados_usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    imc JSON,
                    peso_ideal JSON,
                    recomendacoes JSON
                )
            """)
            self.conn.commit()
            print("Tabela 'dados_usuarios' criada com sucesso.")
        except sqlite3.Error as e:
            print(f"Erro ao criar tabela 'dados_usuarios': {e}")

    def criar_banco_e_tabelas(self):
        if not self.verificar_existencia_banco():
            self.conectar()
            self.criar_tabelas()


