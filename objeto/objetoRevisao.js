const produto = new Object

produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 200

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 500000,
    proprietario: {
        nome: 'Vitor',
        idade: 19,
        endereco: {
            lougradouro: 'Rua lorenço giriboni',
            numero: 57
        }
    },
    condutores: [{
        nome: 'Gabriella',
        idade: 17
    }, {
        nome: 'kravs',
        idade: 19
    }],
    calcularValorSeguro: function() {
        //...
    }

}

console.log(carro)