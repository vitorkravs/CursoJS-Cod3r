function calcularSalario(horasTrabalhadas, salarioHora) {
    const salarioMensal = horasTrabalhadas * salarioHora
    console.log(`Salário igual a R$ ${salarioMensal.toFixed(2).replace('.', ',')}`)
}

calcularSalario(150, 40.5)
calcularSalario(100, 40)