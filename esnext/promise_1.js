let a = 1
console.log(a)


function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscola = letra => letra.toLowerCase()

new Promise(function(comprirPromessa) {
comprirPromessa(['KRAVS', 'vitor', 'gabi', 'gustavo'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscola)
    .then(console.log)