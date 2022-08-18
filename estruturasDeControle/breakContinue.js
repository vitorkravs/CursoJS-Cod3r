const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in numero){
    if(x == 5) {
        break
    }
    console.log(`${x} = ${numero[x]}`)
}

for(y in numero){
    if(y == 5) {
        continue
    }
    console.log(`${y} = ${numero[y]}`)
}