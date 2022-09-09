/*28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/


function calcularVetores(vetores) {
    let pares = 0
    let impares = 0
    for (i = 0; i < vetores.length; i++) {
        if(vetores[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`${pares} números pares e ${impares} números ímpares.`)
}

let vetores = [2, 3, 5, 4, 8]
calcularVetores(vetores)
