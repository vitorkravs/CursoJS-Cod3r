/* 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capInicial, taxaJuros, TempAplicacao) {
    let montante = capInicial + (capInicial * taxaJuros * TempAplicacao)
    console.log('R$' + montante.toFixed(2).toString().replace('.', ','))
}

function jurosCompostos(capInicial, taxaJuros, TempAplicacao){
    let montante = capInicial * (1 + taxaJuros) ** TempAplicacao
    console.log('R$' + montante.toFixed(2).toString().replace('.', ','))
}

jurosSimples(2000, 0.1, 4)
jurosCompostos(2000, 0.1, 4)

