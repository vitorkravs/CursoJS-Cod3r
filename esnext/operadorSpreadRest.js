//operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionarios = {nome: 'Vitor', funcao: 'dev.FrontEnd'}
const clone = {ativo: true, ...funcionarios}
console.log(clone)

//usar spread com array
const grupoA = ['Vitor', 'Kravs', 'Gabi']
const grupoFinal = ['bia', ...grupoA, 'maria']
console.log(grupoFinal)