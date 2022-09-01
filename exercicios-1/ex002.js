/*
02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo).
*/

const valor1 = 5
const valor2 = 5
const valor3 = 6

function verificar() {
    if( valor1 === valor2 && valor1 === valor3 ) {
        console.log('Triângulo Equilátero')
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        console.log('Triângulo Isósceles')
    } else if (valor1 != valor2 && valor1 != valor3 && valor3 != valor2) {
        console.log('Triângulo Escaleno')
    } else {
        console.log('Verifique os números que você digitou!')
    }
}

verificar()