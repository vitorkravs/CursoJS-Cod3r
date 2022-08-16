function tratarErro(erro) {
    // throw new Error'...'
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        name: erro.name,
        mgn: erro.message,
        data: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErro(e)
    } finally{
        console.log('FIM')
    }
}

const obj = {
    name: 'Vitor'
}
imprimirNomeGritado(obj)