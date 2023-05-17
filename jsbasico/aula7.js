const pessoa = {
    nome: 'Gilson Levi',
    idade: 18 ,
    estaAprovado: true,
    sobrenome: 'de Lima Alves',
    sexo: 'Masculino'
};

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


const pessoa1 = criarPessoa("Levi", 12, true);

console.log(pessoa1);

console.log("A idade da pessoa é", pessoa1.idade)