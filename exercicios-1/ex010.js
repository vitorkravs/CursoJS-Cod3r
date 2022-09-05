/*10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false.*/

function verificar(numeroInt) {
    resul = numeroInt % 3
    if(resul == 0) {
        console.log('true')
    } else {
        console.log('false')
    }
}

verificar(10)
verificar(9)
verificar(12)
verificar(15)
verificar(20)