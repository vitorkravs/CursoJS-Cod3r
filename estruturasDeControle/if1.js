function saberNota(nota) {
    if(nota >= 7){
        console.log('Aprovado com nota ' + nota)
    }
}

saberNota(8.5)
saberNota(5)

function seForVerdade(valor){
    if(valor){ // verdadeiro
        console.log('É verdade...' + valor)
    }
}

seForVerdade(NaN)
seForVerdade(undefined)
seForVerdade(null)
seForVerdade('')
seForVerdade()
seForVerdade(0)
seForVerdade(-1)
seForVerdade([])
seForVerdade([1, 2 ])
seForVerdade('  ')
seForVerdade('?')
seForVerdade({})