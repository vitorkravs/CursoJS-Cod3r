function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1))
console.log(soma(1, 3))
console.log(soma(1.3, 7.7))
console.log(soma(1.3, 7, 'teste'))
console.log(soma('a', 'b', 'c'))