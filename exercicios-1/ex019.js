/*​19) ​O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente.*/

function calculoDaCompra(codigo, quantidade) {
    switch (codigo) {
        case 100:
            let produto = 3.00 * quantidade
            console.log(`Cachorro quente, total: R$ ${produto}`)
            break
        case 200:
            let produto2 = 4.00 * quantidade
            console.log(`Hambúrguer Simples, total: R$ ${produto2}`)
            break
        case 300:
            let produto3 = 5.50 * quantidade
            console.log(`Cheeseburguer, total: R$ ${produto3}`)
            break
        case 400:
            let produto4 =  7.50 * quantidade
            console.log(`Bauru, total: R$ ${produto4}`)
            break
        case 500:
            let produto5 = 3.50 * quantidade
            console.log(`Refrigerante, total: R$ ${produto5}`)
            break
        case 600:
            let produto6 = 2.80 * quantidade
            console.log(`Suco, total: R$ ${produto6}`)
            break
        default:
            console.log('Produto não existente!!')
    }
}

calculoDaCompra(100, 2)
calculoDaCompra(200, 2)
calculoDaCompra(300, 2)
calculoDaCompra(400, 2)
calculoDaCompra(500, 2)
calculoDaCompra(600, 2)
calculoDaCompra(700, 2)