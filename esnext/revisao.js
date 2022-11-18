// let and var
{
  var a = 'vitor' //global
  let b = 'Kravszenko'
  console.log(b)
}

console.log(a)
// console.log(b), vai dar erro


// Template string

const produto = ['iPad']
console.log(`${produto} é caro!!`)

//Destructuring
const [l, e, ...tras] = 'cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'Vitor', idade: 19}
console.log(nome, idade)