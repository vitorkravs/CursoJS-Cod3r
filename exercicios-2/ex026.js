function removerVogais(frase) { 
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"] 
     
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )   
    return frase 
}

console.log(removerVogais('vitor'))
console.log(removerVogais('gabi'))
console.log(removerVogais('vitor cesar kravszenko'))