// Exercicio 1

var express = require("express")

var app = express();

app.get("/", function(req, res){
    res.send("Pagina inicial - para ir para pagina de sobre /sobre e para ir para pagina de contato /contato")
});

// Exercicio 2

app.get("/sobre", function(req, res){
    res.send("essa é a rota sobre")
});

app.get("/contato", function(req, res){
    res.send("essa é a rota contato")
});

// Exercicio 4

app.get("/produto/:nome", function(req, res){
    const nome = req.params.nome

    
    res.send("Seu produto é " + nome)
});

app.listen(3000, function(){
    console.log('Minha aplicação está no ar!')
}); 

