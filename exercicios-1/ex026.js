/*26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function encontrarPares() {
    let num = 1
    while (num <= 100) {
        if( num % 2 == 0) {
        console.log(num)
        }
        num++
    }

}

encontrarPares()

//Outro modo de fazer o ex

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares()