const valores = [7.5, 8.9, 5.6, 0.4]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 7.8
console.log(valores)
console.log(valores.length) // conta qunatos elementos existem

valores.push({id: 3}, null, false, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)