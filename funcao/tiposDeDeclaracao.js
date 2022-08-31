console.log(soma(5, 5)) //o JS já carrega todas a funções antes de carregar o codigo, por isso funciona

//function declaration

function soma(a, b) {
    return a + b
}

//function expression

const sub = function (a, b) {
    return a - b
}

console.log(sub(5, 5))

//named function expression

const mult = function mult(a, b) {
    return a * b
}

console.log(mult(5, 5))

