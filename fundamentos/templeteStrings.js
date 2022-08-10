const nome = 'vitor'
const concatenacao = 'Olá ' + nome + ' é um prazer te conhecer!'
const concatenação2 = concatenacao + 'meu nome é julia'
const template = `
    ${nome}
    olá
`
console.log(nome)
console.log(concatenacao)
console.log(concatenação2)
console.log(template)
console.log(template, concatenacao)

//expressões...

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
