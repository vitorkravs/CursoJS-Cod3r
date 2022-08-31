class pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Vitor')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Olá meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Gabi')
p2.falar()