const prompt = require("prompt-sync")();

// CADASTRO

// nome = prompt("Digite seu nome: ")
// sobrenome = prompt("Digite seu sobrenome: ")
// idade = prompt("Digite sua idade: ")
// cidade = prompt("Digite sua cidade: ")

// // console.log("olá " + nome + " " + sobrenome + ", de " + idade + " anos de idade, que mora na cidade de " + cidade + ".")

// console.log(`olá ${nome} ${sobrenome}, de ${idade} anos de idade, que mora na cidade de ${cidade}.`)

// VELOCIDADE 

// let velocidade = prompt("Digite sua velocidade: ")
// let limite = 100

// if(velocidade > limite){
//     console.log("você está acima da velocidade")
// }
// else{
//     console.log("Você está dentro da velocidade")
// }

// PAR OU IMPAR!!

// let numero = prompt("Digite um número: ")

// function parOuImpar(numero) {
//     if(numero % 2 === 0) {
//         return "O número é par.";
//     } else {
//         return "O número é ímpar.";
//     }
// }

// console.log(parOuImpar(numero)); 

// let numero1 = prompt("Entre com o primeiro número: ")
// let numero2 = prompt("Entre com o segundo número: ")
// let numero3 = prompt("Entre com o terceiro número: ")
// let numero4 = prompt("Entre com o quarto número: ")
// let numero5 = prompt("Entre com o quinto número: ")


// pedindo os números

// const Media = (numeros) => { 
//     if (numeros.length === 0) {}

//     const soma = numeros.reduce((total, numero) => total + numero, 0);
//     const media = soma / numeros.length;
//     return media;
// }

// const solicitar = () => {
//     const numeros = [];
//     let numero;

//     do {
//         numero = prompt("Digite um número (ou digite 'fim' para encerrar):");
//         if (numero !== "fim" && !isNaN(numero)) {
//             numeros.push(parseFloat(numero));
//         }
//     } while (numero !== "fim");

//     console.log("Números digitados:", numeros);
//     console.log("Média dos números:", Media(numeros));
// }

// solicitar();

// sem pedir os números

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

// function adicao(num1, num2, anonima) {
//     var resultado = num1 + num2;
//     anonima(resultado);
// }

// var anonima = function(resultado) {
//     console.log("O resultado da soma é:", resultado);
// };
// adicao(7, 3, anonima);

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let contadorRuim = 0;
// let entrevistados = 0;

// function realizarEntrevista() {
//   rl.question('Qual é a sua avaliação para a série "Stranger Things" (ruim, bom ou excelente)? ', (resposta) => {
//     if (resposta.toLowerCase() === 'ruim') {
//       contadorRuim++;
//     }
//     entrevistados++;

//     if (entrevistados < 4) {
//       realizarEntrevista();
//     } else {
//       console.log(`O número de pessoas que classificaram a série como ruim é: ${contadorRuim}`);
//       rl.close();
//     }
//   });
// }

// realizarEntrevista();

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



// for (let i = 0; i <= 10; i++) {
//     const resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`);
//   }

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let products = {
//   'Hortifruti': 0,
//   'Laticínios': 0,
//   'Carnes': 0,
//   'Peixes': 0,
//   'Aves': 0
// };

// function askProduct() {
//   rl.question('Qual produto você deseja comprar? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido\n', (answer) => {
//     if (answer === '6') {
//       let maxProduct = Object.keys(products).reduce((a, b) => products[a] > products[b] ? a : b);
//       console.log(`O produto em maior quantidade é: ${maxProduct}`);
//       rl.close();
//     } else if (answer in products) {
//       askQuantity(answer);
//     } else {
//       console.log('Opção inválida. Por favor, selecione uma opção válida.');
//       askProduct();
//     }
//   });
// }

// function askQuantity(product) {
//   rl.question(`Quantos itens de ${product} você deseja comprar?\n`, (answer) => {
//     let quantity = parseInt(answer);
//     if (!isNaN(quantity) && quantity >= 0) {
//       products[product] += quantity;
//       askProduct();
//     } else {
//       console.log('Quantidade inválida. Por favor, insira um número válido.');
//       askQuantity(product);
//     }
//   });
// }

// askProduct();


// const frutas = [];

// for (let i = 0; i < 3; i++) {
//     const fruta = prompt(`Insira a ${i + 1}ª fruta: `);
//     frutas.push(fruta);
// }

// console.log('A fruta é:', frutas[1])

// const frutas = [];

// for (let i = 0; i < 3; i++) {
//     const fruta = prompt(`Insira a ${i + 1}ª fruta: `);
//     frutas.push(fruta);
// }

// console.log('o Array é:', frutas)

// frutas.shift();

// frutas.unshift('abacaxi');

// console.log('O novo Array é:', frutas);

const  numeros = [];

for (let i = 0; i < 5; i++) {
    const Array = parseInt(prompt(`Insira a ${i + 1}º numero: `));
    numeros.push(Array);
}

console.log('o Array é:', numeros)

for(let i = 0; i < numeros.length; i++) {
    console.log(`o numero é: ${numeros[i]}`)
}

function calcular(acumulador, numero) {
    return acumulador + numero;
}

const soma = numeros.reduce(calcular, 0);

console.log("A soma do Array é:", soma);

const numerosOrdenados = [...numeros]

numerosOrdenados.sort((a, b) => a - b);

console.log("Números em ordem crescente:", numerosOrdenados);

function numerospares(numero) {
    return numero % 2 === 0;
}

const pares = numeros.filter(numerospares);

console.log('os numeros pares são:', pares)

function Quadrado(numero) {
    return numero * numero;
}

const quadrados = numeros.map(Quadrado);

console.log("Quadrados dos números:", quadrados);