// Exercicio 1

var express = require("express")

var app = express();

// app.get("/",function(req, res){
//     res.sendFile(__dirname + "/public/semana9.html")
// })


// // Exercicio 2


// app.get("/sobre", function(req, res){
//     res.send("essa é a rota sobre")
// });

// app.get("/contato", function(req, res){
//     res.send("essa é a rota contato")
// });


// // Exercicio 3


// const PORT = 3500;

// const logHoraMiddleware = (req, res, next) => {
//   const horaAtual = new Date().toISOString();
//   console.log(
//     `[${horaAtual}] Nova solicitação: ${req.method} ${req.originalUrl}`
//     );
//   next(); 
// };

// const logHoraMiddleware2 = (req, res, next) => {
//   console.log("Salvar Requisição")
//   next(); 
// };

// const logHoraMiddleware3 = (req, res, next) => {
//   console.log("Validar Yup")
//   next(); 
// };

// app.get('/', logHoraMiddleware, logHoraMiddleware2, (req, res) => {
//   res.send('testando, testando');
// });

// app.post('/', logHoraMiddleware, logHoraMiddleware2,  logHoraMiddleware3,(req, res) => {
//   res.send('TESTE, TESTE');
// });

// app.listen(PORT, () => {
//   console.log('Servidor rodando', {PORT});
// });


// // Exercicio 4

// app.get("/produto/:nome", function(req, res){
//     const nome = req.params.nome

    
//     res.send("Seu produto é " + nome)
// });

// app.get("/",function(req, res){
//     res.sendFile(__dirname + "/public/index.html")
// })

// app.get("/sobre",function(req, res){
//     res.send("Essa é minha primeira aplicação de servidors!!!!")
// })

// app.get("/ola", function(req, res){
//     res.send("Olá, tudo bem turminha?")
// })

// app.get("/ola/:nome/:idade", function(req, res){
//     // http://localhost:3000/ola/Rawan/25
//     let nome = req.params.nome
//     res.send("Ola "+ nome + " ,tudo bem?")
    
// })

// app.get("/busca", (req, res) => {
//     // let parametro = req.query.parametro

//     const { nome, idade, cpf } = req.query

//     // Verificar se o parâmetro "parametro" está presente!
//     if(!nome) {
//         return res.status(400).json({
//             error: "Nome não foi informado!"
//         })
//     }

//     if(!cpf) {
//         return res.status(400).json({
//             error: "CPF não foi informado!"
//         })
//     }

//     res.json({ message: `Você pesquisou por: nome: ${nome} idade: ${idade} cpf: ${cpf}`})
// })



// app.listen(3500, function(){
//     console.log("Servidor Rodando!!!")
// })


// // Exercicio 5


// const PORT = 3500;

// let pessoas = [];

// app.use(express.json());

// const logHoraMiddleware = (req, res, next) => {
//     const horaAtual = new Date().toISOString();
//     console.log(
//       `[${horaAtual}] Nova solicitação: ${req.method} ${req.originalUrl}`
//       );
//     next();
//   };

// app.use(logHoraMiddleware())

// app.get('/', (req, res) => {
//     res.json("Sucesso");
// });

// app.get('/pessoas', (req, res) => { 
//     res.json(pessoas);
// });

// app.get('/pessoas/:id', (req, res) => {
//     const { id } = req.params;
//     const pessoa = pessoas.find(pessoa => pessoa.id === parseInt(id));
//     if (!pessoa) {
//         res.status(404).send('Pessoa não encontrada.');
//         return;
//     }
//     res.json(pessoa);
// });

// app.post('/pessoas', (req, res) => {
//     const pessoa = req.body;
//     pessoa.id = pessoas.length > 0 ? pessoas[pessoas.length - 1].id + 1 : 1;
//     pessoas.push(pessoa);
//     res.status(201).send('Pessoa adicionada.');
// });

// app.put('/pessoas/:id', (req, res) => {
//     const { id } = req.params;
//     const newData = req.body;
//     const index = pessoas.findIndex(pessoa => pessoa.id === parseInt(id));
//     if (index === -1) {
//         res.status(404).send('Pessoa não encontrada.');
//         return;
//     }
//     pessoas[index] = { ...pessoas[index], ...newData };
//     res.status(200).send('Pessoa atualizada.');
// });

// app.delete('/pessoas/:id', (req, res) => {
//     const { id } = req.params;
//     const index = pessoas.findIndex(pessoa => pessoa.id === parseInt(id));
//     if (index === -1) {
//         res.status(404).send('Pessoa não encontrada.');
//         return;
//     }
//     pessoas.splice(index, 1);
//     res.status(200).send('Pessoa deletada.');
// });

// app.listen(PORT, () => {
//     console.log('Servidor rodando', {PORT});
// });