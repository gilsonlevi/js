// Nature dinâmica do Objetos

const mouse = {
    cor : "red",
    marca : "dazz"
}
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log("Mudando DPI")
}
console.log(mouse)