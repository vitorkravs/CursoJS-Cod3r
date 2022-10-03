function calcularMedia(numeros) { 
    const quantidadeDeNumeros = numeros.length 
    let somaTotal = 0 
   
    for(numero of numeros) { 
      somaTotal += numero 
    } 
   
    return somaTotal / quantidadeDeNumeros
}

console.log(calcularMedia([10, 7, 10]))