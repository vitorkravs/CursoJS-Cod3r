// 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
// multiplicação e divisão desses valores.


// jeito certo kskskksks

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)

//jeito burro que eu fiz
function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multi(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

console.log(soma(5, 5))
console.log(sub(5, 5))
console.log(multi(5, 5))
console.log(div(5, 5))
