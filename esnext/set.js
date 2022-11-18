// não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('Palmeiras').add('Corintians').add('São Paulo')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

times.delete('Flamengo')
console.log(times)