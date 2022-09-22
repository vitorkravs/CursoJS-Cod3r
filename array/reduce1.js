const alunos = [
    {nome: 'Vitor', nota: 9.5, bolsista: false},
    {nome: 'Gabi', nota: 10, bolsista: false},
    {nome: 'lucidalia', nota: 10, bolsista: false},
    {nome: 'Ana', nota: 9.5, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual 
})

console.log(resultado)

