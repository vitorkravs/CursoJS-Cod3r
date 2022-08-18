function imprimirNumeros(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = imprimirNumeros(-1, 10)
    console.log(`A opção escolida foi ${opcao}`)
}

console.log('Fim do exercico')