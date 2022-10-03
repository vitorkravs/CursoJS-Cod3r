function receberSomenteOsParesDeIndicesPares(numeros) { 
    let resultado = [] 
   
    for(let i = 0; i < numeros.length; i += 2){ 
      const numeroPar = numeros[i] % 2 === 0 
   
      if(numeroPar) 
        resultado.push(numeros[i]) 
    } 
     
    return resultado 
  }

const array1 = [5, 1, 2, 3, 4] // Lembrando que sempre começa com índice 0
const array2 = [10, 1, 22, 3, 44]

console.log(receberSomenteOsParesDeIndicesPares(array1))
console.log(receberSomenteOsParesDeIndicesPares(array2))