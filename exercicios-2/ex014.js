function objetoParaArray(objeto) { 
    return Object.entries(objeto) 
  
}

let objeto = {
    nome: 'Vitor',
    sobrenome: 'Kravszenko',
    rua: 'Lourenço giriboni',
    numero: 57
}

console.log(objetoParaArray(objeto))