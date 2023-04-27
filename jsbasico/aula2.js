//Criando objetos

let pessoa = {
    nome: 'Gilson Levi',
    idade: 18 ,
    estaAprovado: true,
    sobrenome: 'de Lima Alves',
    sexo: 'Masculino'
};

let pessoa2 = {

    nome: 'Maria Eduarda',
    idade: 18,
    estaAprovado: false,
    sobrenome: 'não sei',
    sexo: 'Feminino'
};


//Arrays

//Criação de um array com 3 posições
let familia = [25,25, 18];

//Mostrando o indice 2 do array "familia"
console.log(familia[2]);

//Vendo o tamnho do array
console.log('O tamanho do array é: ' + familia.length);

let pessoas = [pessoa, pessoa2];

console.log(pessoas[0].nome);

console.log(pessoas[1].nome);

