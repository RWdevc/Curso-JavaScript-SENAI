let valor = 9999
let compra
let valorFinal


if (valor >= 200){
    compra = valor * 0.20
    valorFinal = valor - compra 
    console.log( 'R$',valorFinal, 'desconto de 20%')
}
else if(valor >= 100){ 
    compra = valor * 0.10
    valorFinal = valor - compra 
    console.log( 'R$',valorFinal, 'desconto de 10%')
}
else{
    console.log('R$',valor, ', sem desconto')
}