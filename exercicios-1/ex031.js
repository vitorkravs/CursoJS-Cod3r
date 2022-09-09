/*31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console.*/

function negativos (vetor) {
    numNegativos = 0
    for(i = 0;  i < vetor.length; i++){
        if(vetor[i] < 0) {
            numNegativos++
        }
    }
    console.log(`${numNegativos} números!`)
    //poderia colocar o return numNegativos, e console fora da função
}

const vetor = [-4, -3, -2, -1, 0, 1, 2, 3]
negativos(vetor)