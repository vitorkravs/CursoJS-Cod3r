function inverter(objeto) { 
    const objetoInvertido = {} 
   
    Object.entries(objeto).forEach( parChaveValor => { 
      const chave = 0, 
            valor = 1 
   
      objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave] 
    }) 
   
    return objetoInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3}))