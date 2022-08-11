//Função sem retorno
function ImprimirNumeros(a, b){
    console.log(a + b)
}

ImprimirNumeros(5, 5)
ImprimirNumeros(5, 8, 7, 3) // vai ignorar o resto dos valores
ImprimirNumeros(8) //vai fazer a some mas vai dar Not A Number NAN
ImprimirNumeros() // mesma coisa que o exemplo anterior

//Função com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2)) // vai utilizar o valor definido para fazer a soma