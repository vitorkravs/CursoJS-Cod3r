const pilotos = ['piloto1', 'piloto2', 'piloto3', 'piloto4', 'piloto5']
console.log(pilotos)

pilotos.pop() // remove o último índice
console.log(pilotos)

pilotos.push('piloto6') // adiciona no último índice
console.log(pilotos)

pilotos.shift() //remove o primeiro índice
console.log(pilotos)

pilotos.unshift('piloto0') // adciona no primeiro índice
console.log(pilotos)

// splice, pode remover e adicionar elementos

//adicionar
pilotos.splice(2, 0, 'piloto2.5') // índice[2], remover nenhum, adicionei ''piloto2.5
console.log(pilotos)

//remover
pilotos.splice(1, 2) // apartir do índice 1, remove 2 elementos
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo array // pega uma parte do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)