function estaEntre(minimo, maximo, numero, inclusivo = false) { 
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo 
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))