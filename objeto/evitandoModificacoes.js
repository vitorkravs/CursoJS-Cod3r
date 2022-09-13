// Object.preventExtencions, que não deixa adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', valor: 2.99, tag: 'abcdef'
})

console.log('Extencivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'ascoscoasnca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Vitor', idade: 18, prof: 'Programador'}
Object.seal(pessoa)
console.log('Selado: ', Object.seal(pessoa))

pessoa.sobrenome = 'Kravszenko'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

// Object.freeze = delado + valores constantes(não podem ser mudados)