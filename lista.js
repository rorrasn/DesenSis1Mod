var sorvete = "coco"
console.log(sorvete)

var saborSorv = ["uva", "morango", "chocolate", "limao"]
console.log(saborSorv)

saborSorv.push("menta")// add variavel no final da lista
console.log(saborSorv)

saborSorv.pop()// remove o ultimo variavel da lista
console.log(saborSorv)

saborSorv[0] = "caja"// reescreve a posição 0

console.log(saborSorv)
console.log(saborSorv.length)

saborSorv.splice(0,0,"jaca")// reescreve a posição 0 e elimina nenhum elemento
console.log(saborSorv)
saborSorv.splice(2,0,"jaca")// reescreve a posição 2 e elimina nenhum elemento
console.log(saborSorv)
saborSorv.splice(0,1,"jaca")// reescreve a posição 0 e elimina um elemento
console.log(saborSorv)
saborSorv.splice(0,0,"jaca", "manga", "pitomba")// reescreve a posição 0
console.log(saborSorv)

