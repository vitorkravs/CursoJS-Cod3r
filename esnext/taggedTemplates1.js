//tagged templates - processa o templatedentro de uma função
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Kravs'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`) 