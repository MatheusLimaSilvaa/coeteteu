const prompt = require("prompt-sync")();

// Exercicio 1

// const numero = prompt('Entre com seu numero: ')

// function verificacao(numero) {
//     return new Promise((resolve, reject) => {
//       if (numero % 2 === 0) {
//         resolve("Número par");
//       } else {
//         reject(new Error("Error: número ímpar"));
//       }
//     });
//   }

//   verificacao(numero)
//     .then(mensagem => {
//       console.log(mensagem);
//     })
//     .catch(error => {
//       console.error(error.message);
//     });

    // Exercicio 2

    // function getUserInfo() {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         const userInfo = {
    //           nome: prompt('Entre com seu nome: '),
    //           idade: prompt('Entre com sua idade: '),
    //           email: prompt('Entre com seu email: '),
    //         };
    //         resolve(userInfo);
    //       });
    //     });
    //   }
    
    //   async function mostrarUserInfo() {
    //     try {
    //       const userInfo = await getUserInfo();
    
    //       await new Promise(resolve => setTimeout(resolve, 2000));
    
    //       console.log("Nome:", userInfo.nome);
    //       console.log("Idade:", userInfo.idade);
    //       console.log("Email:", userInfo.email);
    //     } catch (error) {
    //       console.error("erro, não consegui pegar os dados:", error);
    //     }
    //   }
    
    //   mostrarUserInfo();


    // Exercicio 3 no HTML/JSON.


    // Exercicio 4

    function salvarUsuario() {
        // Pede as informações do usuário
        const nome = prompt("Digite seu nome:");
        const idade = parseInt(prompt("Digite sua idade:"));
        const email = prompt("Digite seu email:");
      
        // Cria um objeto com as informações
        const usuario = {
          nome: nome,
          idade: idade,
          email: email,
        };
      
        // Salva o objeto no localStorage
        localStorage.setItem("user", JSON.stringify(usuario));
      
        // Mensagem de sucesso
        alert("Usuário salvo com sucesso!");
      }
      
      // Executa a função
      salvarUsuario();

    // Exercicio 5


    // Exercicio 6


    // Exercicio 7


    // Exercicio 8

