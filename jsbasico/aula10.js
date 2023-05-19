// const pessoa = {
//     nome: 'Gilson Levi',
//     idade: 18 ,
//     estaAprovado: true,
//     sobrenome: 'de Lima Alves',
//     sexo: 'Masculino'
// };

// const novoObjeto =  Object.assign({bateria: 5000}, pessoa);

// console.log(novoObjeto);


//String 

//Tipo primitivo
const mensagem = 'minha primeira mensagem';
//Tipo objeto
const outraMensagem = new String('bom dia');

//Tamanho da String

const men = mensagem.toUpperCase();
console.log(men);

//Saber se contem uma palavra
console.log(mensagem.includes("minha"));

//Saber se começa com uma letra especifica
console.log(mensagem.startsWith("ta"));

//Saber se termina com um letra especifica
console.log(mensagem.endsWith("mensagem"));

//Mudar uma palavra
console.log(mensagem.replace("minha", "sua"));

//Retirar espaços do final e do começo
console.log(mensagem.trim());

//Repartição da string
console.log(mensagem.split(' '));