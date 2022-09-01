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