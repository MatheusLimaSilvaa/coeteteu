var express = require("express")

var app = express();

app.get("/", function(req, res){
    res.send("Olá, mundo")
});

app.get("/sobre", function(req, res){
    res.send("essa é a rota sobre")
});

app.get("/aluno/:aluno/:idade", function(req, res){
    res.send(req.params.aluno)
});

app.get("/nome/:aluno/:idade", function(req, res){
    res.send(req.params)
});

app.get("/ola/:nome", function(req, res){
    const nome = req.params.nome

    
    res.send("Bem vindo " + nome)
});

app.listen(3500, function(){
    console.log('Minha aplicação está no ar!')
}); 