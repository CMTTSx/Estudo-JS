function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${nome} está falando ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('Maria', 'Alessandra');
console.log(p1.fala('Falando sobre JS'));
console.log(p1.nome)