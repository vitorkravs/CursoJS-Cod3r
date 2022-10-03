function despesasTotais(itens) { 
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0) 
}

const teste = [
    {nome: 'Vitor', Idade: 19, escola: 'SESI', preco: 89.99 },
    {nome: 'Vitor', Idade: 19, escola: 'Objetivo', preco: 150 }
]

console.log(despesasTotais(teste))