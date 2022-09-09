/* 
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function mediaAritmetica(vetor) {
    let soma = 0
    for( i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma / vetor.length
}

const vetor = [10, 10, 10]
console.log(mediaAritmetica(vetor))