// Armazenando função em uma variavel

const imprimirValor = function (a = 1, b = 2){
    console.log(a + b)
}

imprimirValor(2, 2)
imprimirValor()

//armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 2))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 2))

const imprimir2 = a => console.log(a)
imprimir2('Meu nome é vitor e usei uma arrow funcion')