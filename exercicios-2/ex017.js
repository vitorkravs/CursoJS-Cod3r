function somarNumeros(numeros) { 
    let soma = 0 
    numeros.forEach(numero => soma += numero) 
     
    return soma 
  }

  console.log(somarNumeros([1, 2, 3, 4, 5]))
  console.log(somarNumeros([2, 5, 3, 5, 5]))

  //Outro modo 

  function somarNumeros(numeros) { 
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0) 
     
    return soma 
  }  