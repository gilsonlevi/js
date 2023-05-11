const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria: 5000,
    ligar : function(){
        console.log("Fazendo ligação...");
    }
}

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return celular = {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...");
        }
    }
    
}
