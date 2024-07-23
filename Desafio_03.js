//Condições: Escreva um programa que pergunte ao usuário sua idade e 
//imprima se ele é maior de didade, menor de idade ou idoso.

let age = 60;


if(age < 18) {
    console.log("Menor de idade");
} else if (age >= 18 && age < 60) {
    console.log("Maior de idade");
} else if (age >= 60) {
    console.log("idoso");
}