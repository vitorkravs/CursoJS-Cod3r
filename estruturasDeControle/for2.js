const array = [2, 5, 6, 8, 10]

for(let notas in array){
    console.log(notas,':', array[notas])
}

const usuario = {
    nome:'Vitor Cesar Kravszenko',
    idade: 19,
    peso: '70 kg',
    endereco: {
        rua: 'Lourenço giriboni',
        bairro: 'Vila maciel',
        numero: 57
    }
}

for (let pessoa in usuario){
    console.log(`${pessoa} = ${usuario[pessoa]}` )
}