function nomeDoMes(num) {
    switch(num) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10: 
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Número Inválido!!')
    }
}
nomeDoMes(0)
nomeDoMes(1)
nomeDoMes(2)
nomeDoMes(3)
nomeDoMes(4)
nomeDoMes(5)
nomeDoMes(6)
nomeDoMes(7)
nomeDoMes(8)
nomeDoMes(9)
nomeDoMes(10)
nomeDoMes(11)
nomeDoMes(12)
nomeDoMes(13)

// outro modo
function receberNomeDoMes2(numero) { 
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',  
      'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'] 
   
    return mapeamento[--numero]; 
  }

  console.log(receberNomeDoMes2(5))