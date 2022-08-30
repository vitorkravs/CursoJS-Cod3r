const fabricantes = ["Mercedes", "BMW", "Audi"]

function imprimirResultado(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimirResultado)
fabricantes.forEach(fabricante => console.log(fabricante))