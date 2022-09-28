function filtrarNumeros() { 
    return array.filter(item => typeof item === "number")
}
const array = ['vitor', 1, 2, 3, '5', 6, 'Lindo']

console.log(filtrarNumeros(array))