const pai = {nome: 'Vitor', corCabelo: 'Loiro'}

const filha1 = Object.create(pai)
filha1.nome = 'Gabriella'
console.log(filha1.corCabelo, filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Ana', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Kravs'
console.log(`${filha2.nome} tem cabelos ${filha2.corCabelo}`)


console.log(Object.keys(pai))
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}