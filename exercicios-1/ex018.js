/*18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.*/
function number(num) {
    switch (num) {
        case 0:
            console.log('ZERO')
            break
        case 1:
            console.log('UM')
            break
        case 2:
            console.log('DOIS')
            break
        case 3:
            console.log('TRÊS')
            break
        case 4:
            console.log('QUATRO')
            break
        case 5:
            console.log('CINCO')
            break
        case 6:
            console.log('SEIS')
            break
        case 7:
            console.log('SETE')
            break
        case 8:
            console.log('OITO')
            break
        case 9:
            console.log('NOVE')
            break
        case 10:
            console.log('DEZ')
            break
        default:
            console.log('Número fora de intervalo')
    }
}
number(0)
number(1)
number(2)
number(3)
number(4)
number(5)
number(6)
number(7)
number(8)
number(9)
number(10)