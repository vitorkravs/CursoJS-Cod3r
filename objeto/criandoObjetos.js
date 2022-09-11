// Usando uma notação literal

const obj1 = {}
console.log(obj1)

// Object no JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funçoes construtoras
function produto(nome, valor, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return valor * (1 - desc)
    }
}

const p1 = new produto('celular', 1000, 0.10)
const p2 = new produto('notebook', 3000, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função Factory
function criarFucionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFucionario('Vitor', 3000, 10)
const f2 = criarFucionario('Victor', 9000, 10)
console.log(f1.getSalario())
console.log(f2.getSalario())