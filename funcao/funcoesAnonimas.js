const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(7, 5)
imprimirResultado(7, 5, soma)
imprimirResultado(3,4, function(x, y){
    return x - y })
imprimirResultado(7, 5, (x, y) => x * y)

const obj = {
    falar: function(){
        console.log('OPA')
    }
}

obj.falar()