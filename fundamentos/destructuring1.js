const sobre = {
    nome: 'Vitor',
    idade: 19,
    logradouro: {
        rua: 'Lourenço giriboni',
        numero: 57
    }
}

console.log(sobre)

const {nome, idade} = sobre
console.log(nome, idade)

const {logradouro: {rua, numero, cep}} = sobre
console.log(rua, numero, cep)

const {nome: name, idade: years} = sobre
console.log(nome, years)

const {estadoCivil, certidaoDeNascimento = true} = sobre
console.log(estadoCivil, certidaoDeNascimento)

