const prompt = require("prompt-sync")();

function digitaValor(){
    let numero1 = NaN;
    let numero2 = NaN;

    while (isNaN(numero1)){
        numero1 = parseInt(prompt("Digite o primeiro número?    "));
        numero1 = numero1/1;
    } 
    while (isNaN(numero2)){
        numero2 = parseInt(prompt("Digite o segundo número?    "));
        numero2 = numero2/1;
    } 
    let array = [numero1, numero2];
    return array;
}
//console.log(digitaValor())

function calculo(operador, valores = digitaValor()) {

    if (operador=="/") {
        let result = eval(`${valores[0]}${operador}${valores[1]}`)
        let resto = eval(`${valores[0]}%${valores[1]}`)
        console.log(`O resultado da divisão é ${result}`)
        console.log(`O resto da divisão é ${resto}`)
    } else {
        let result = eval(`${valores[0]}${operador}${valores[1]}`)
        console.log(`O resultado final é ${result}`)
    }
}

function calculadora(){
    operacao = prompt("Digite qual operador aritmética deseja fazer: +   -  /  *    ");
    let resultado = calculo(operacao);
    return resultado
    
}

calculadora()