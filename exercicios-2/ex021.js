function menorNumero(numeros) { 
    let menor = numeros[0] 
   
    for (let i in numeros) 
      if (numeros[i] < menor) 
        menor = numeros[i] 
   
    return menor
}

console.log(menorNumero([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(menorNumero([10, 9, 8, 7, 6, 5, 15, 3, 2, 1]))
console.log(menorNumero([10, 9, 8, 7, 6, 5, 15, 3, 8, 9]))