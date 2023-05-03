 

 function verificarVelocidade(velocidade){
    if (velocidade <= 70){
        console.log("OK")
    }else if (velocidade > 70) {
        let amais = ((velocidade - 70) / 5);
        console.log("Você terá:", Math.floor(amais), "na carteira");
        if (amais >= 12) {
            console.log("Carteira suspendidada");
        }
    }
 }

 verificarVelocidade(130);