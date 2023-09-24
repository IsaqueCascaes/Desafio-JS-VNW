let cadastro = [
    {
      'nome': 'joao',
      'idade': 21,
      'telefone': 40028922,
      'amigos': []
    }
];


function adicionarAmigo(nome, amigo) {
    for (let i = 0; i < cadastro.length; i++) {
        if (cadastro[i].nome === nome) {
        cadastro[i].amigos.push(amigo);
        break;
    }
    }
}

adicionarAmigo('joao', 'Maria');
adicionarAmigo('joao', 'Carlos');

console.log(cadastro[0].amigos);