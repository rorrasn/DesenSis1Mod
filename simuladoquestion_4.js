const readline = require("readline-sync");
let soma = 0;
for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(readline.question(`Digite a nota ${i}: `));
    soma += nota;
}

let media = soma / 5;

if (media >= 7) {
    console.log("Aprovado");
} else if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
}
