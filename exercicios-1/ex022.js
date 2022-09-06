/*22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function calcularValor(mesInt, valor) {
    if (mesInt > 0 && mesInt < 13) {
        atraso = mesInt - 1
        return (valor * ((1 + (5/100)) ** atraso)).toFixed(2)
    } else {
        return 'Mês invalido!'
    }
}

console.log('R$' + calcularValor(0, 100))
console.log('R$' + calcularValor(1, 100))
console.log('R$' + calcularValor(2, 100))
console.log('R$' + calcularValor(3, 100))
console.log('R$' + calcularValor(4, 100))
console.log('R$' + calcularValor(5, 100))
console.log('R$' + calcularValor(6, 100))
console.log('R$' + calcularValor(7, 100))
console.log('R$' + calcularValor(8, 100))
console.log('R$' + calcularValor(9, 100))
console.log('R$' + calcularValor(10, 100))
console.log('R$' + calcularValor(11, 100))
console.log('R$' + calcularValor(12, 100))
console.log('R$' + calcularValor(13, 100))