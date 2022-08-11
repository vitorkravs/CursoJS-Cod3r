//Par Nome Valor
const saudacao = 'opaa' // contexto Léxico #1

function exec(){
    const saudacao = 'legal' // contexto Léxico #2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const client = {
    nome: 'Vitor Cesar Kravszenko',
    idade: 19,
    endereço: {
        logradouro: 'Rua Lourenço Giriboni',
        bairro: 'Vila Maciel',
        numero: 57
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)
