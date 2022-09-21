const carrinho = [
    '{"nome": "Borracha", "preco": 3.5}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit lapis", "preco": 41.20}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)