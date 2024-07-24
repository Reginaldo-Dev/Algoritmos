//Calculo do IMC

let altura = 1.75;
let peso = 75;

function calculoIMC(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
}

const imc = calculoIMC(altura, peso);
console.log(imc)
