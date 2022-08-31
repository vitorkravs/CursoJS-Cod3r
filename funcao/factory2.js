function criarPessoa(nome, valor) {
    return {
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(criarPessoa('Notebook', 2399))
console.log(criarPessoa('iphone', 4399))