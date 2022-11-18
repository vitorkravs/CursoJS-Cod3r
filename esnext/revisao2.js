//arrow function, sempre é uma funcao anônima
const soma = (a, b) => a + b
console.log(soma(5, 6))

//arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'Node') {
  console.log(texto)
}

log()
log('Sou mais forte!')

//operador rest
function total(...numeros)/* conjunto de números*/ {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}

console.log(total(1, 5, 6, 7, 2))
  