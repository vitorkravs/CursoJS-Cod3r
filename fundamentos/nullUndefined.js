let valor // não inicializada
console.log(valor)

valor = null // sem valor
console.log(valor)
// console.log(valor.toString()) // Error

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto, !!produto.preco)
console.log(produto)

produto.preco = null // sem valor definido
console.log(!!produto, !!produto.preco)
console.log(produto)