
//1. Realize um algoritmo que receba o peso e a altura de uma pessoa e calcule o índice de massa corpórea. Ele mede a relação entre peso e altura (peso em Kg, dividido pelo quadrado da altura em metros).
peso = 52
altura = 1.70
Imc = (peso/(altura**2))
console.log("seu IMC e" + Imc)

//2. Pense e desenvolva um algoritmo que solicite a entrada de dois números inteiros e calcule e mostre a potência do primeiro número pelo segundo (X elevado a Y).
Num1 = 5
Num2 = 10
potencia = Num1**Num2
console.log("a potencia de "+Num1+" em "+Num2+" e "+potencia)

//3. Implemente um algoritmo que calcule o valor em Reais, correspondente aos dólares que um turista possui no cofre do hotel. O programa deve solicitar os seguintes dados: Quantidade de dólares guardados no cofre e cotação do dólar naquele dia.
dolares = 100
cotacao = 5.30
totalReal = (dolares*cotacao)
console.log("total guardado em Reais e" + totalReal)

//4. Faça outro algoritmo que leia um número inteiro e informe se ele é par ou ímpar.
Numeral = 5
    if ((Numeral%2) == 0){
        console.log("o numero e par")
    }else{
        console.log("o NUmero e impar")
    }

//5. Pense e crie um algoritmo que leia dois valores diferentes e determine o maior.
Num1 = 5
Num2 = 10
    if (Num1 > Num2){
        console.log("o numero " +Num1 + " e maior")
    }else{
        console.log("o NUmero " +Num2 + " e maior")
    }

//6. Considerando que um comerciante comprou um produto e quer vendê-lo com um lucro de 50% se o valor da compra for menor que R$ 200, caso contrário o lucro será de 30%. Desenvolva um algoritmo que leia o valor da compra e exiba o valor da venda.7. Levando em consideração o seu salário bruto, calcule o salário líquido descontando 10% quando o salário bruto for menor que R$ 2000, caso contrário descontar 20%. No final, exiba o salário líquido.