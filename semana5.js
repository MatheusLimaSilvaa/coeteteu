const prompt = require("prompt-sync")();

// Exercicio 1

// const frutas = [];

// for (let i = 0; i < 3; i++) {
//     const fruta = prompt(`Insira a ${i + 1}ª fruta: `);
//     frutas.push(fruta);
// }

// console.log('A fruta é:', frutas[1])


// Exercicio 2

// const frutas = [];

// for (let i = 0; i < 3; i++) {
//     const fruta = prompt(`Insira a ${i + 1}ª fruta: `);
//     frutas.push(fruta);
// }

// console.log('o Array é:', frutas)

// frutas.shift();

// frutas.unshift('abacaxi');

// console.log('O novo Array é:', frutas);


// Exercicio 3

// const numeros = [];

// for (let i = 0; i < 5; i++) {
//     const Array = prompt(`Insira a ${i + 1}º numero: `);
//     numeros.push(Array);
// }

// console.log('o Array é:', numeros)

// for(let i = 0; i < numeros.length; i++) {
//     console.log(`o numero é: ${numeros[i]}`)
// }


// Exercicio 4

// const  numeros = [];

// for (let i = 0; i < 5; i++) {
//     const Array = parseInt(prompt(`Insira a ${i + 1}º numero: `));
//     numeros.push(Array);
// }

// console.log('o Array é:', numeros)

// for(let i = 0; i < numeros.length; i++) {
//     console.log(`o numero é: ${numeros[i]}`)
// }

// function calcular(acumulador, numero) {
//     return acumulador + numero;
// }

// const soma = numeros.reduce(calcular, 0);

// console.log("A soma do Array é:", soma);


// Exercicio 5

// const  numeros = [];

// for (let i = 0; i < 5; i++) {
//     const Array = parseInt(prompt(`Insira a ${i + 1}º numero: `));
//     numeros.push(Array);
// }

// console.log('o Array é:', numeros)

// for(let i = 0; i < numeros.length; i++) {
//     console.log(`o numero é: ${numeros[i]}`)
// }

// function calcular(acumulador, numero) {
//     return acumulador + numero;
// }

// const soma = numeros.reduce(calcular, 0);

// console.log("A soma do Array é:", soma);

// const numerosOrdenados = [...numeros]    

// numerosOrdenados.sort((a, b) => a - b);

// console.log("Números em ordem crescente:", numerosOrdenados);


// // ---- Começo do Exercicio 6 ----


// function numerospares(numero) {
//     return numero % 2 === 0;
// }

// const pares = numeros.filter(numerospares);

// console.log('os numeros pares são:', pares)


// // ---- Começo do Exercicio 7 ----


// function Quadrado(numero) {
//     return numero * numero;
// }

// const quadrados = numeros.map(Quadrado);

// console.log("Quadrados dos números:", quadrados);
