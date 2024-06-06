function contagem(numeroInicial, numeroFinal) {
    for (let i = numeroInicial; i >= numeroFinal; i -= 2) {
        console.log(i);
    }
}

contagem(20, 0);
/////////////////////////////////

function regressiva(inicio, fim) {
    if (inicio < fim) {
        console.log("o primeiro valor sempre será maior que o primero")
    }
    for (let contage = inicio; contage >= fim; contage -= 2) {
        console.log(contage)
    }
}
regressiva(20,0)
