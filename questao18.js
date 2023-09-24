let sobreMim = {
    'nome': "isaque",
    'idade': 19,
    'profissao': "Desenvolvedor Front-End"
}

for (let propriedade in sobreMim) {
    console.log(propriedade + ":" + sobreMim[propriedade])
}