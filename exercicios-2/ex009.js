function repetir(valor, repetir) {
    let resul = []
    for(let i = 0; i < repetir; i++){
        resul.push(valor)
    }
    return resul
}

console.log(repetir(2, 2))