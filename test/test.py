import time

dados_coletados = []

while True:
  print("\033[1;35mAtividade -- Calculadora de IMC 🌐\033[0m")
  print("\033[1;33m===== Menu =====\033[0m")
  print("\033[1;32m> 🖥️   Calcular IMC     > [1]\033[0m")
  print("\033[1;32m> 📊  Ver informações  > [2]\033[0m")
  print("\033[1;32m> 📊  Dados            > [3]\033[0m")
  print("\033[1;31m> ❌  Sair             > [4]\033[0m")
  cat_art = """
    \033[31m  /\_/\  
    \033[32m ( o.o ) - Miau
    \033[33m  > ^ <
    \033[0m
    """

  print(cat_art)

  opcao = input(
    "\033[1;34mDigite sua opção: \033[0m")  # capturar a opção do usuário

  def isNumber(value):
    if value.isdigit():  # Verificar se a entrada é um número
      return True
    else:
      return False

  if isNumber(opcao):

    def selectOp(selectOpcao):

      if (selectOpcao == "1"):
        print("\033[1;36mPreencher os Dados 🌟💻\033[0m \n")
        nome = input(
          "\033[1;33m🌟🚀  Bem-vindo(a)! Por favor, digite seu Nome: \033[0m\n >>> "
        )
        idade = int(
          input(
            f"\033[1;33mOlá, {nome}! ✨  Qual é a sua Idade? \033[0m\n >>> "))
        altura = float(
          input(
            f"\033[1;33mLegal, {nome}! 📏  Agora, digite sua Altura (em metros): \033[0m\n >>> "
          ))
        peso = float(
          input(
            f"\033[1;33mQuase lá, {nome}! ⚖️  Digite seu Peso (em kg): \033[0m\n >>> "
          ))

        def loading_animation(duration):
          animation = "|/-\\"
          end_time = time.time() + duration

          while time.time() < end_time:
            for char in animation:
              print(f"\r\033[1;35mProcessando os dados {nome} {char}\033[0m",
                    end="")
              time.sleep(0.1)
              print(
                "\033[K",
                end="")  # Limpar a linha antes de imprimir o próximo caractere

        loading_animation(3)

        print("\033[1;33m======== Dados Coletados ===========\033[0m")

        def create_table(data):
          print(
            f"+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*25}+"
          )
          print(
            f"|{'Nome':^15}|{'Peso':^15}|{'Idade':^15}|{'Altura':^15}|{'IMC':^15}|{'Normalidade':^15}|{'Informação':^25}|"
          )
          print(
            f"+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*25}+"
          )

          for row in data:
            print(
              f"|{row[0]:^15}|{row[1]:^15}|{row[2]:^15}|{row[3]:^15}|{row[4]:^15}|{row[5]:^15}|{row[6]:^25}|"
            )
            print(
              f"+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*15}+{'-'*25}+"
            )

        # Dados de exemplo para a tabela
        imc = round(float(peso) / (float(altura) * float(altura)), 2)

        if imc < 18.5:
          normalidade = "\033[1;31mAbaixo do Peso ❌\033[0m"
          info = "  Grau I"
        elif imc < 24.9:
          normalidade = "\033[1;32mPeso Normal ✅\033[0m"
          info = "  Normal!"
        elif imc < 29.9:
          normalidade = "\033[1;33mSobrepeso ⚠️\033[0m"
          info = "  Grau II"
        else:
          normalidade = "\033[1;31mObeso ❌\033[0m"
          info = "  Grau III"

        dados = [
          [
            f"{nome}", f"{peso} kg", idade, f"{altura} m", imc,
            f"{normalidade}", f"{info}"
          ],
          # ["Maria", "55 kg", 22, "1.60 m", 21.48, "Peso Normal", "IMC = Peso / (Altura * Altura)"],
        ]

        dados_coletados.append({
          "nome": nome,
          "peso": peso,
          "idade": idade,
          "altura": altura,
          "imc": imc,
          "normalidade": normalidade,
          "informacao": info
        })

        # Chamada da função para criar a tabela
        create_table(dados)

      elif selectOpcao == "2":
        print("\033[1;36m==== Informações da Atividade 📋 ====\033[0m")
        print("\033[1;34mAtividade: Calculadora de IMC\033[0m")
        print("\033[1;34mAluno: Daniel Estevão Martins Mendes\033[0m")
        print("\033[1;34mInstituição: (Piitagoras anhaguera) 🏫\033[0m")
        print(
          "\033[1;34mDescrição: Esta atividade consiste em uma Calculadora de Índice de Massa Corporal (IMC) 💪, que permite aos usuários calcular o IMC com base em informações como nome, idade, altura e peso.\033[0m"
        )
        print(
          "\033[1;34mO IMC é calculado e categorizado em diferentes níveis de acordo com as diretrizes da Organização Mundial da Saúde (OMS) 🌍.\033[0m"
        )
        print(
          "\033[1;34mEsperamos que esta atividade ajude a entender e visualizar melhor o conceito de IMC e suas implicações para a saúde. 😉\033[0m"
        )
        print("=" * 40)
        print("\033[1;36m==== Informações do Aluno 🧑‍🎓 ====\033[0m")
        print("\033[1;34mNome: Daniel Estevão Martins Mendes\033[0m")
        print("\033[1;34mCurso: (Desenvolvedo de Back-end) 📘\033[0m")
        print("\033[1;34mMatrícula: (3673690201) 🔢\033[0m")
        print("\033[1;34mEmail: (danielesteva232004@gmail.com) 📧\033[0m")
        print("=" * 40)
      elif (selectOpcao == "3"):
        if dados_coletados:
          print("\033[1;36m==== Dados Coletados ====\033[0m")
          print(
            f"+{'-'*15}+{'-'*10}+{'-'*15}+{'-'*10}+{'-'*10}+{'-'*10}+{'-'*15}+"
          )
          print(
            f"|{'Nome':^15}|{'Peso':^10}|{'Idade':^15}|{'Altura':^10}|{'IMC':^10}|{'Normalidade':^10}|{'Informação':^15}|"
          )
          print(
            f"+{'-'*15}+{'-'*10}+{'-'*15}+{'-'*10}+{'-'*10}+{'-'*10}+{'-'*15}+"
          )

          for dado in dados_coletados:
            print(
              f"|{dado['nome']:^15}|{dado['peso']:^10}|{dado['idade']:^15}|{dado['altura']:^10}|{dado['imc']:^10}|{dado['normalidade']:^10}|{dado['informacao']:^15}|"
            )
            print(
              f"+{'-'*15}+{'-'*10}+{'-'*15}+{'-'*10}+{'-'*10}+{'-'*10}+{'-'*15}+"
            )
        else:
          print("Nenhum dado coletado ainda.")

      elif (selectOpcao == "4"):
        return True
      else:
        print("\033[1;31m❌ Erro ao buscar opção. Opção não existe\033[0m")

    if selectOp(opcao):
      break

  else:
    print("\033[1;31mDigite [2] ou -help\033[0m")
