// middleware pattern(chain of responsibility)
const passo1 = (contexto, next) => {
    contexto.valor = 'mdl1'
    next()
}

const passo2 = (constexto, next) => {
    constexto.valor = mdl2
    next
}

const passo3 = contexto => contexto.valor3 = 'mdl3'