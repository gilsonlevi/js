
const filme = {
    titulo: "Vingadores",
    ano: 2018,
    diretor: "Robin",
    personagem: "Thor"
}


function exibirPropriedade (obj){
    for(prop in obj){
        if (typeof obj[prop]=== 'string'){
            console.log(prop, obj[prop])
        }
    }
}

exibirPropriedade(filme);