const imprimirResultado = function(nota){
    if(nota>=7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('epa')// por ser uma linguagem fracamente tipada, vai dar falso, cando no bloco do else e escrevendo reprovado