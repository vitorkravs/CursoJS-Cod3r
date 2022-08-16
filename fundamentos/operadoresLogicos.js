function compras(trabalhor1, trabalhor2) {
    const comprarSorvete = trabalhor1 || trabalhor2
    const comprarTv50 = trabalhor1 && trabalhor2
    // const comprarTv35 = !!(trabalhador1 ^ trabalhador2) bitwise xor
    const comprarTv35 = trabalhor1 != trabalhor2
    const economizar = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv35, economizar} // criei um objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))