var num = 1
console.log(num)

var numero = [1, 2, 3, 4, 5]
console.log(numero)

numero.push(6)// add variavel no final da lista
console.log(numero)

numero.pop()// remove o ultimo variavel da lista
console.log(numero)

numero[0] = 10// reescreve a posição 0

console.log(numero)
console.log("tamanho da lista e: " + numero.length) // mostra qual o tamanho da lista

numero.splice(0,0,11)// reescreve a posição 0 e elimina nenhum elemento
console.log(numero)
numero.splice(2,0,13)// reescreve a posição 2 e elimina nenhum elemento
console.log(numero)
numero.splice(0,1,11)// reescreve a posição 0 e elimina um elemento
console.log(numero)
numero.splice(0,0,21, 22, 23)// reescreve a posição 0
console.log(numero)

for(i=0; i < numero.length; i++){
    numero[i] = i
    
    console.log(numero)
}
