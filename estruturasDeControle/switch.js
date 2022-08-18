const imprimirNota = function(nota){
    switch (Math.floor(nota)){
        case 10:
// poderia colocar o console direto aqui
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        case "teste":
            console,log('É uma string, e não uma nota!!!')
            break
        default:
            console.log('Nota invalida') 
    }
}

imprimirNota(10)
imprimirNota(8.5)
imprimirNota(5.78)
imprimirNota(2.33)
imprimirNota(-1)
imprimirNota('epa')
imprimirNota()
imprimirNota("teste")