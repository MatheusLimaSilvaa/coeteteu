const prompt = require("prompt-sync")();

// Exercicio 1, 2, 3, 4, 5 e 6

// let produto =  class produto {
//     constructor(nome, preco, quantidade) {
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }
    
//     vender(quantidadeVendida) {
//         if (quantidadeVendida > this.quantidade) {
//           console.log(`Estoque insuficiente para ${this.nome}. Quantidade disponível: ${this.quantidade}.`);
//         }
//          else {
//           this.quantidade -= quantidadeVendida;
//           console.log(`Venda realizada com sucesso! Quantidade restante: ${this.quantidade}.`);
//         }
//       }
//       repor(adicionar) { this.quantidade += adicionar 
//             console.log(`Foi reposto ${adicionar} do produto ${this.nome} agora o estoque é de ${this.quantidade}.`)
//         }
        
//         mostreestoque(nome) {
//             console.log(`O produto ${this.nome} possui ${this.quantidade} unidades dispiniveis.`)
//         }
        
//         atualizarpreco(novopreco){
//           this.preco = novopreco
//           console.log(`O produto ${this.nome} agora custa ${novopreco}`)
//         }
//     }

//     const produto1 = new produto('banana', '10', '5')
//     produto1.vender(2)
//     produto1.vender(4)
//     produto1.vender(3)
//     produto1.repor(5)
//     produto1.mostreestoque()
//     produto1.atualizarpreco(10)


// Exercicio 7 e 8

// class pessoa {
//     nome;
//     idade;
//     profissao;

//     constructor(nome, idade, profissao){
//         this.nome = nome
//         this.idade = idade
//         this.profissao = profissao
//     }
// }

// class cliente extends pessoa {
//     telefone;
//     email;
//     clienteDesde;

//     constructor(nome, idade, profissao, telefone, email, clienteDesde){
//         super(nome, idade, profissao)
//         this.telefone = telefone
//         this.email = email
//         this.clienteDesde = clienteDesde
//     }
// }

// const cliente1 = new cliente("Matheus", 28, "programador", "36015388984", "silva-lima_matheus@hotmail.com", "1995-08-18")
// console.log(cliente1)