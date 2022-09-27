function simboloMais(numero) {
    let quant = ''
    for(let i = 0; i < numero; i++) {
        quant += '+'
    }
    return quant
}

console.log(simboloMais(2))
console.log(simboloMais(4))
console.log(simboloMais(10))