console.log(Math.ceil(6.1))
var nome = {}
nome.sobrenome = 'cesar'
console.log(nome.sobrenome)

nome['sobrenome'] = 'Kravszenko'
console.log(nome.sobrenome)

function objeto (nome) {
    this.nome = nome
    this.exec = function(){
        console.loge('exec...')
    }
}

const objeto2 = new objeto('Cadeira')
const objeto3 = new objeto('Mesa')
console.log(objeto2.nome)
console.log(objeto3.nome)