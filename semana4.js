const prompt = require("prompt-sync")();

// Exercicio 2

// let numero = prompt("Digite um número: ")

// function parOuImpar(numero) {
//     if(numero % 2 === 0) {
//         return "O número é par.";
//     } else {
//         return "O número é ímpar.";
//     }
// }

// console.log(parOuImpar(numero)); 



// Exercicio 3

// const media = (numeros) => {
//     if (numeros.length === 0) {
//         return
//     }

//     const soma = numeros.reduce((total, numero) => total + numero, 0);
//     const media = soma / numeros.length;
//     return media;
// }

// const numeros = [1, 2, 3, 4, 5]; // <-- Troque os números aqui
// console.log(media(numeros));


// Exercicio 4

// function adicao(num1, num2, anonima) {
//     var resultado = num1 + num2;
//     anonima(resultado);
// }

// var anonima = function(resultado) {
//     console.log("O resultado da soma é:", resultado);
// };
// adicao(7, 3, anonima);


// Exercicio 5

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let contadorRuim = 0;
// let usuariosEntrevistados = 0;

// function fazerEntrevista() {
//   rl.question(`Qual a sua avaliação para a série "Stranger Things"? (ruim, bom, excelente)\n`, (answer) => {
//     if (answer === 'ruim') {
//       contadorRuim++;
//     }
//     usuariosEntrevistados++;

//     if (usuariosEntrevistados < 4) {
//       fazerEntrevista();
//     } else {
//       console.log(`Número de pessoas que classificaram a série como ruim: ${contadorRuim}`);
//       rl.close();
//     }
//   });
// }

// fazerEntrevista();


// Exercicio 6

// for (let i = 0; i <= 10; i++) {
//     const resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`);
//   }


// Exercicio 7

