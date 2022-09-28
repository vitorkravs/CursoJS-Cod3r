const array1 = [1, 2, 3, 4, 'Olá']
const array2 = [10, 20, 30, 40, 'lindo']
const array3 = ['vitor', 20, 30, 40, 'lindo']

function receberPrimeiroEUltimoElemneto([primeiroElemnto, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()

    return [primeiroElemnto, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemneto(array1))
console.log(receberPrimeiroEUltimoElemneto(array2))
console.log(receberPrimeiroEUltimoElemneto(array3))
