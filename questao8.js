let verdade = true

function verificar() {
    if(verdade === true) {
        console.log(" A variavel é verdadeira")
    } else {
        console.log(" A variavel é falsa")
    }
}

verificar()

// INSERI OUTRA FORMA PARA VER SE FUNCIONAVA, APENAS NÃO SEI SE A SEGUNDA FORMA QUE FIZ ESTÁ CORRETA SINTATICAMENTE

function verificar2(variavel) {
if(variavel === true) {
    console.log(" A variavel é verdadeira")
} else {
    console.log(" A variavel é falsa")
}
}

verificar2(false)