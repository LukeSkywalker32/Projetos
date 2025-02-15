// ANTIGAMENTE
//const express = require('express');

// NOVO
import express from 'express';
const app = express();
app.use(express.json());


//TIPOS DE ROTAS
// GET = pegar
app.get('/usuarios', (req, res) => {
    console.log(req)
    res.send('Resposta do servidor é essa para tipo GET: Hello World!')
})
// req = request
// res = response

// POST = enviar
app.post('/usuarios', (req, res) => {
    res.send('Resposta do servidor é essa para tipo POST: Hello World!')
})

//ROUTE PARAMS
app.get("/usuarios/:itemVarivel", (req, res) => {
    console.log(req);
    res.send("Resposta do servidor é essa para tipo GET/ROUTE PARAMS");
});

app.post("/usuariosBody", (req, res) => {
    console.log(req);
  res.send("Resposta do servidor é essa para tipo POST/BODYPARAMS: Hello World!");
});

app.post("/usuariosCadastro", (req, res) => {
  console.log(req);
  res.send(
    "Resposta do servidor é essa para tipo POST/BODYPARAMS: Hello World!"
  );
});


app.listen(3000)