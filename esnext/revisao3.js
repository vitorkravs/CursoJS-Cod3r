// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal
const nome = 'Kravs'
const pessoa = {
  ola(){
    return 'Olá'
  },
  nome
}

console.log(pessoa.ola(), pessoa.nome)

//Class
class Animal {}
class Cachorro extends Animal{
  falar() {
    return 'Au, Au!'
  }
}

console.log(new Cachorro().falar())
console.log(Animal)
console.log(Cachorro)