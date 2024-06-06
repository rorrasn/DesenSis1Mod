const readline = require("readline-sync");


let feriado = readline.question("É feriado? (sim/não): ").toLowerCase() === 'sim';
let sol = readline.question("Está sol? (sim/não): ").toLowerCase() === 'sim';
let chovendo = readline.question("Está chovendo? (sim/não): ").toLowerCase() === 'sim';
let diaSemana = readline.question("Qual é o dia da semana? ").toLowerCase();

if (feriado && sol) {
    console.log("Eu vou à praia.");
} else if (chovendo && feriado) {
    console.log("Ficarei em casa assistindo Animes e doramas.");
} else if (sol || diaSemana === 'sabado') {
    console.log("Eu vou ir à praia pegar um solzinho.");
} else if (!feriado && diaSemana !== 'sabado' && diaSemana !== 'domingo') {
    console.log("Eu vou trabalhar porque preciso pagar minhas dívidas.");
} else {
    console.log("Vou ler um livro ou fazer algo relaxante.");
}
