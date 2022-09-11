// pessoa -> 123 -> ...
const pessoa = {nome: 'Vitor'}
pessoa.nome = 'Gabi'
console.log(pessoa)

// pessoa -> 456 -> ...
// pessoa = {nome: 'ana'}

Object.freeze(pessoa)// metdo que torna o objeto constante

pessoa.nome = 'asafea'
pessoa.end = 'beiufei'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)