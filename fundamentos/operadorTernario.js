// const resultado = nota => nota>=7 ? 'Aprovado' : 'Reprovado' // Função arrow
const resultado = nota => {
    return nota>=7 ? 'Aprovado, parabens!' : 'Reprovado, se fudeo'
}

console.log(resultado(7.1))
console.log(resultado(5))