const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao site de teste para o segundo projeto")
})

app.get("/teste",function(req,res){
    res.send("<h1>Teste de rota realizado!</h1>");
})

app.get("/aprovado/:parametro",function(req,res){
    res.send("Aluno Aprovado na apresentação do projeto: "+ req.params.parametro)
})
app.get("/cadastrar/:nome?",function(req,res){
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>Cadastro do funcionario"+ nome +" realizado!<h1>");
    }else{
        res.send("Parametro invalido para cadastro!")
    }
})

app.listen(9000,function(erro){
    if(erro){
        console.log("Erro ao Iniciar. ");
    }else{
        console.log("Servidor Iniciado. ");
    }
})
