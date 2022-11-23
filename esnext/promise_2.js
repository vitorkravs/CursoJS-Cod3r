/*
setTimeout(function(){
    console.log('Executando callBack...')
    
    setTimeout(function(){
        console.log('Executando callBack...')
        
        setTimeout(function() {
            console.log('Executando callBack...')
        }, 2000)
    }, 2000)
}, 2000)
*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve('vishh')
        }, tempo)
    })
}

esperarPor(3000).then(texto => console.log(texto))