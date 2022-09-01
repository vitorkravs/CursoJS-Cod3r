function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(2000, 10/100, 4));
console.log(jurosCompostos(2000, 10/100, 4));
