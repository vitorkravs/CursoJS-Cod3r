const alunos = [
    {nome: 'Vitor', nota: 9.5, bolsista: false},
    {nome: 'Gabi', nota: 10, bolsista: false},
    {nome: 'lucidalia', nota: 10, bolsista: false},
    {nome: 'Ana', nota: 9.5, bolsista: true}
]

// todos são bolsistas?
const todosSaoBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosSaoBolsistas))

// algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))