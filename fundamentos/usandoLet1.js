//var tem scopo global e de função
//let tem de global, função e de bloco

let numero = 1
{
    let numero = 1
    console.log('Dentro, ', numero)
}
console.log('Fora, ',numero)

//teste 1

let nome = 'vitor'
{
    let nome = 'kravs'
    console.log('Dentro, ',nome) // vai dar preferencia para a variavel declarada dentro do bloco
}
console.log('Fora, ', nome)

//teste 2

let nome2 = 'vitor'
{
    let testando = 'kravs'
    console.log('Dentro, ',nome) // vai utilizar o scope global nessa situação
}
console.log('Fora, ', nome)