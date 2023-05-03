//If..Else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa tarde
// Caso contrário : Boa noite

// let hora = 22;

// if(hora > 6 && hora < 12) {
//     console.log("Bom dia");
// }
// else if (hora > 12 && hora < 18){
//     console.log("Boa tarde")
// }
// else {
//     console.log("Boa noite")
// }


// let permissao;

// permissao = 'gerente';
// switch (permissao) {
//     case 'comum' :
//     console.log("Usuario comum")
//     break;

//     case 'gerente':
//         console.log("Usuario gerente")
//         break;

//     case 'diretor' :
//         console.log("Usuario diretor")
//         break;

//         default:
//             console.log("Usuario não reconhecido")
// }

//Laço for/loop for

// 1.For
// 2. While
// 3. Do..shile
// 4. For..In
// 5. For..of

//For

// for(let i = 0; i<10; i++){
//     console.log("Oi", i);
// }

// for(let i = 0; i <= 100; i++){
//     console.log(i);
// }

// for(let i = 100; i >0; i--){
//     console.log(i)
// }


//While loop

// let i = 0

// while (i <= 100){
//     console.log(i);
//     i++;
// }

//For..In

const pessoa = {
    nome: 'Levi',
    idade: 18,
}

for(let chave in pessoa){
    console.log(chave, pessoa['nome'])
}

const cores = ["Vermehlo", "Azul", "Verde"];