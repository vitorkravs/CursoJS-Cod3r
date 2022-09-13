function Aula(nome, IDvideo) {
    this.nome = nome
    this.IDvideo = IDvideo
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// Simulando new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 789)
const aula4 = novo(Aula, 'Até Breve', 987)
console.log(aula3, aula4)