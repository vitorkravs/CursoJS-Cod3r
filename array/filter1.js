const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12, fragil: true},
    { nome: 'Copo de Plastico', preco: 16, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)