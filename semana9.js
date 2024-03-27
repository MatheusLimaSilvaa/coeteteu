var express = require("express")

var app = express();

app.get("/", function(req, res){
    res.send("Pagina inicial - para ir para pagina de sobre /sobre e para ir para pagina de contato /contato")
});

app.get("/sobre", function(req, res){
    res.send("essa é a rota sobre")
});

app.get("/contato", function(req, res){
    res.send("essa é a rota contato")
});

app.listen(3000, function(){
    console.log('Minha aplicação está no ar!')
}); 