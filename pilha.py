
pilha = ['uva', 'maça', 'salada mista']

while True:
    print(f"\nExistem {len(pilha)} cliente na pilha")
    print(f"pilha atual: {pilha}")
    operacao = input("Digite F pra adicionar um elemento na pilha ou A para remover.")
    

    if operacao == "F":
        elemento = input("digite o elemento")
        pilha.append(elemento)
    
    elif operacao == "A":
        if len(pilha) > 0:
            pilha.pop()
    print(f"pilha atual: {pilha}")

   
