function contarPalavras(frase){ 
    const palavras = frase.split(" ") 
    return palavras.length
}

let frase = 'Meu nome é Vitor'
console.log(contarPalavras(frase))