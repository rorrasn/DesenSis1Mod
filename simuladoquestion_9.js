const readline = require("readline-sync");

function parouimpar() {
    // Solicita ao usuário um número entre 0 e 100
    let number = parseInt(readline.question("Digite um número entre 0 e 100: "));

    // Verifica se o número está dentro do intervalo permitido
    if (number >= 0 && number <= 100) {
        // Verifica se o número é par ou ímpar
        if (number % 2 === 0) {
            console.log(`O número ${number} é par.`);
        } else {
            console.log(`O número ${number} é ímpar.`);
        }
    } else {
        console.log("O número deve estar entre 0 e 100.");
    }
}

// Chama a função
parouimpar (4);