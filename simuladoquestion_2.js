const readline = require("readline-sync");

let number = readline.question("Digite um número: ");
number = parseInt(number);  // Convertendo a string para número

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Buzz");
} else if (number % 5 === 0) {  // Adicionado condição para múltiplos de 5
    console.log("Fizz");
} else {
    console.log("Número não é múltiplo de 3 ou 5");
}