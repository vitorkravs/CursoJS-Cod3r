const resulA = require('./instanciaUnica')
const resulB = require('./instanciaUnica')
resulA.inc()
resulA.inc()

console.log(resulA.valor, resulB.valor)

const resulC = require('./instanciaNova') ()
const resulD = require('./instanciaNova') ()

resulC.inc()
resulC.inc()
console.log(resulC.valor, resulD.valor)
