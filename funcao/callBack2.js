const notas = [2, 4, 6, 5, 7, 8, 9, 10]

//sem callBack
const notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)