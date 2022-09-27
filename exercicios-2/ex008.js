function multiplicacao(num1, num2) {
    const resul = Math.imul(num1, num2)
    console.log(resul)
}

multiplicacao(2, 2)
multiplicacao(3, 5)
multiplicacao(2, 6)
multiplicacao(5, 2)

//outro modo
function multiplicar(numeroA, numeroB) { 
    let resultado = 0 
   
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser 
       realizada aqui para diminuir a quantidade de loops */ 
    for(let i = 0; i < numeroB; i++) 
      resultado += numeroA 
   
    return resultado 
}

console.log(multiplicar(5, 2))