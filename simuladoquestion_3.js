const readline = require("readline-sync");


let palavra = readline.question("Digite uma palavra: ");

// Converte a palavra para minúsculas para facilitar a comparação
palavra = palavra.toLowerCase();

if (palavra[0] === 'a' || palavra[0] === 'e' || palavra[0] === 'i' || palavra[0] === 'o' || palavra[0] === 'u') {
    console.log("sim");
} else {
    console.log("não");
}