
pilha = ['prato1', 'prato2', 'prato3']

while True:
    print(f"\nExistem {len(pilha)} cliente na pilha")
    print(f"pilha atual: {pilha}")
    operacao = input("Digite F pra adicionar um prato na pilha, A para remover ou S p/ sair.")
    

    if operacao == "F":
        elemento = input("digite o elemento")
        pilha.append(elemento)
    
    elif operacao == "A":
        if len(pilha) > 0:
            pilha.pop()
        print(f"pilha atual: {pilha}")

    elif operacao == "S":
        print(f"voce saiu do sistema: pilha atual: {pilha}")
        break
    else:
        print("Erro: nenhuma alternativa aceita foi inserida")
        break
   
