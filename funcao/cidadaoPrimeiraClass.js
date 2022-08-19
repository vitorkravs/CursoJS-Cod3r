//Função em JS é First-Class Object (Citizens)

// Higher-Order function

// Criar de forma literal
function fun1() {}

// Armazenar a função dentro de uma variável
const fun2 = function () {} 

// Armazenar dentro de um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 5)) // colocquei o indice 0, e atribui os valores dos parametros

// Armazenar em um atributo de objeto
const objeto1 = {}
objeto1.falar = function() {return 'opa'}
console.log(objeto1.falar()) 

// Passar uma função como parametro

function run(fun){
    fun()
}

run(function run(){console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2 ,2)(6)
const cincoMais = soma(2, 3)
cincoMais(5)