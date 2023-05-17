// camelCase - umDoisTresQuatro
function criarPessoa(nome, idade, estaAprovado){
    return {
        nome,
        idade,
        estaAprovado,
        sobrenome: 'de Lima Alves',
        sexo: 'Masculino',
        fazerAniversario(){
            idade++;
        }
    }
}

//Pascal Case - UmDoisTresQuatro
function Pessoa(nome, idade, estaAprovado){
    this.nome = nome,
    this.idade = idade,
    this.estaAprovado = estaAprovado
}

const pessoa2 = new Pessoa("Gilson Levi", 18, true);

console.log(pessoa2);