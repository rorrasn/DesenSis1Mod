ultimo = 10
fila = list(range(1, ultimo +1))

while True:
    print(f"\nExistem {len(fila)} cliente na fila")
    print(f"Fila atual: {fila}")
    print("Digite F pra adicionarum cliente ao fim da fila.")
    print("ou A para realizaro atendimento, S para sair.")
    operecao = input("Operação (F, A ou S):")

    if operacao == "A":
        if len(fila > 0):
            atendido = fila.pop(0)
            print(f"cliente {atendido} Atendido")
        else :
            print ("fila vazia")

    elif operacao == "F":
        ultimo += 1 #incrementa novo cliente
        fila.append(ultimo)

    elif operacao == "S":
        break

    else:
        print("operacao invalida")