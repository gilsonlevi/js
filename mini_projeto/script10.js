function exibirNumerosPrimos(limite){

    let dois = 0;
    for(let i = 2; i <=limite; i++){
        for(let j = 2; j <= i; j++){
            if(i % j === 0){
                dois +=1;
            }

        }
        if(dois < 2) {
            console.log(i)
        }
        dois = 0;
    }
}

exibirNumerosPrimos(15);