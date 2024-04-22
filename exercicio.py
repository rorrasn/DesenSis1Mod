while True:
    # Solicita um número ao usuário
    numero = int(input("Digite um número (0 para sair): "))

    # Verifica se o número digitado é 0
    if numero == 0:
      # Sai do loop se o número for 0
      break

    # Exibe o número digitado
    print(f"Você digitou: {numero}")