// ANTIGAMENTE
//const express = require('express');

// NOVO
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

//TIPOS DE ROTAS
// GET = pegar
app.get("/usuarios", (req, res) => {
  console.log(req);
  res.send("Resposta do servidor é essa para tipo GET: Hello World!");
});

app.post("/usuarios", (req, res) => {
  res.send("Resposta do servidor é essa para tipo POST: Hello World!");
});

//-----------------------------------------------------------
//ROUTE PARAMS
app.get("/usuarios/:itemVarivel", (req, res) => {
  console.log(req);
  res.send("Resposta do servidor é essa para tipo GET/ROUTE PARAMS");
});

app.post("/usuariosBody", (req, res) => {
  console.log(req);
  res.send(
    "Resposta do servidor é essa para tipo POST/BODYPARAMS: Hello World!"
  );
});

//-----------------------------------------------------------
// CRIANDO UM USUÁRIO MAS SALVANDO EM UM VARIVEL (ARRAY) NA MEMORIA DO COMPUTADOR
app.post("/usuariosCadastro", (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
});

app.get("/usuariosCadastro", (req, res) => {
  res.status(200).json(users);
});

//----------------------------------------------------------
// CRIANDO UM USUÁRIO MAS SALVANDO EM UM BANCO DE DADOS
/*app.post("/usuariosCadastroBD", async (req, res) => {

  const user = await prisma.user.create ({
    data: {
      name:  req.body.name,
      email: req.body.email,
      age:   req.body.age
    }
  })
  
  res.status(201).json({user});
});
*/

//----------------------------------------------------------
// CRIANDO VARIOS USUÁRIOS E SALVANDO EM UM BANCO DE DADOS
app.post("/usuariosCadastroBD", async (req, res) => {
  const {users} = req.body

  const createUsers = await prisma.user.createMany ({
    data: users
  })
  
  res.status(200).json({ message: `${createUsers.count} usuário(s) deletado(s)!` });
});

app.get("/usuariosCadastroBD", async (req, res) => {

    const allUsers = await prisma.user.findMany()

  res.status(200).json(allUsers);
});

//----------------------------------------------------------
// ATUALIZANDO USUÁRIO EXISTENTE E SALVANDO EM UM BANCO DE DADOS
app.put("/usuariosCadastroBD/:id", async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.params.id
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });

  res.status(200).json({ user });
});

//----------------------------------------------------------
// DELETANDO UM USUÁRIO EXISTENTE E SALVANDO EM UM BANCO DE DADOS
/*app.delete("/usuariosCadastroBD/:id", async (req, res) => {
  const userDel = await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: `${userDel.count} usuário(s) deletado(s)!` });
});
*/
//----------------------------------------------------------
// DELETANDO VARIOS USUÁRIOS EXISTENTE
app.delete("/usuariosCadastroBD", async (req, res) => {
  const { ids } = req.body;
  const delUsers = await prisma.user.deleteMany({
    where: {
      id: {in: ids}
    },
  });

  res.status(200).json({ message: `${delUsers.count} Usuários deletados com sucesso!`});
});


app.listen(3000); // escolhe a porta que vai rodar o servidor

/*
 req = request
 res = response
 POST = enviar
*/

//----------------------------------------------------------

/*
  User: LukeSkywalkerBD
  Pass: AoUeVQvwNHvoNj9d
//----------------------------------------------------------

*/

/*
OK - CRIAR
OK - LER
OK - DELETAR
OK - EDITAR

   CRUD
    -CREATE
    -READ
    -UPDATE
    -DELETE
*/