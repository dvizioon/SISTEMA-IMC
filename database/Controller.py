import sqlite3
import os
import sys

sys.path.append(".")

class ControllerTable:
    def __init__(self, nome_banco):
        self.nome_banco = nome_banco
        self.caminho_banco = os.path.join('database', self.nome_banco)
        self.conn = None
        self.cursor = None

    def conectar(self):
        try:
            self.conn = sqlite3.connect(self.caminho_banco)
            self.cursor = self.conn.cursor()
            print(f"Conexão com o banco de dados '{self.caminho_banco}' estabelecida com sucesso.")
        except sqlite3.Error as e:
            print(f"Erro ao conectar ao banco de dados: {e}")

    def fechar_conexao(self):
        if self.conn:
            self.conn.close()
            print("Conexão com o banco de dados fechada.")

    def verificar_existencia_banco(self):
        if os.path.exists(self.caminho_banco):
            print(f"O banco de dados '{self.caminho_banco}' já existe.")
            return True
        else:
            print(f"O banco de dados '{self.caminho_banco}' não existe.")
            return False

    def verificar_existencia_tabela(self, nome_tabela):
        try:
            self.cursor.execute(f"SELECT name FROM sqlite_master WHERE type='table' AND name='{nome_tabela}'")
            tabela = self.cursor.fetchone()
            if tabela:
                print(f"A tabela '{nome_tabela}' já existe no banco de dados.")
                return True
            else:
                print(f"A tabela '{nome_tabela}' não existe no banco de dados.")
                return False
        except sqlite3.Error as e:
            print(f"Erro ao verificar existência da tabela '{nome_tabela}': {e}")
            return False

    def listar_registros(self, nome_tabela):
        try:
            if self.verificar_existencia_tabela(nome_tabela):
                self.cursor.execute(f"SELECT * FROM {nome_tabela}")
                registros = self.cursor.fetchall()
                return registros
        except sqlite3.Error as e:
            print(f"Erro ao listar registros da tabela '{nome_tabela}': {e}")

    def inserir_registro(self, nome_tabela, imc, peso_ideal, recomendacoes):
        try:
            if self.verificar_existencia_tabela(nome_tabela):
                self.cursor.execute(f"INSERT INTO {nome_tabela} (imc, peso_ideal, recomendacoes) VALUES (?, ?, ?)", (imc, peso_ideal, recomendacoes))
                self.conn.commit()
                print(f"Registro inserido com sucesso na tabela '{nome_tabela}'.")
        except sqlite3.Error as e:
            print(f"Erro ao inserir registro na tabela '{nome_tabela}': {e}")

    def atualizar_registro(self, nome_tabela, id_registro, novos_dados):
        try:
            if self.verificar_existencia_tabela(nome_tabela):
                self.cursor.execute(f"UPDATE {nome_tabela} SET dados = ? WHERE id = ?", (novos_dados, id_registro))
                self.conn.commit()
                print(f"Registro atualizado com sucesso na tabela '{nome_tabela}'.")
        except sqlite3.Error as e:
            print(f"Erro ao atualizar registro na tabela '{nome_tabela}': {e}")

    def deletar_registro(self, nome_tabela, id_registro):
        try:
            if self.verificar_existencia_tabela(nome_tabela):
                self.cursor.execute(f"DELETE FROM {nome_tabela} WHERE id = ?", (id_registro,))
                self.conn.commit()
                print(f"Registro deletado com sucesso na tabela '{nome_tabela}'.")
        except sqlite3.Error as e:
            print(f"Erro ao deletar registro na tabela '{nome_tabela}': {e}")
