// ANTIGAMENTE
//const express = require('express');

// NOVO
import express from "express";
import { PrismaClient } from "@prisma/client";
import { validarUsuario } from "./Middlewares.js";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(express.json());
app.use(cors())

//TIPOS DE ROTAS
// GET = pegar

/*app.get("/usuarios", (req, res) => {
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
*/

//----------------------------------------------------------
// CRIANDO UM USUÁRIO MAS SALVANDO EM UM BANCO DE DADOS
app.post("/usuariosCadastroBD", async (req, res) => {

  const user = await prisma.user.create ({
    data: {
      name:  req.body.name,
      email: req.body.email,
      age:   Number(req.body.age)
    }
  })
  
  res.status(201).json({user});
});


//----------------------------------------------------------
// CRIANDO VARIOS USUÁRIOS E SALVANDO EM UM BANCO DE DADOS
/*app.post("/usuariosCadastroBD", async (req, res) => {
  const { users } = req.body;

  const createUsers = await prisma.user.createMany({
    data: users,
  });

  res
    .status(200)
    .json({ message: `${createUsers.count} usuário(s) criado(s)!` });
});
*/
// ----------------------------------------------------------
// BUSCANDO USUÁRIOS SALVOS NO BANCO DE DADOS
app.get("/usuariosCadastroBD", async (req, res) => {
  const allUsers = await prisma.user.findMany();

  res.status(200).json(allUsers);
});

//----------------------------------------------------------

// ATUALIZANDO USUÁRIO EXISTENTE E SALVANDO EM UM BANCO DE DADOS
app.put("/usuariosCadastroBD/:id", validarUsuario, async (req, res) => {
  //usando Middleware importado de um arquivo separado
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        age: Number(req.body.age), // aqui converto a string em número.
      },
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ error:error.message });
  }
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
      id: { in: ids },
    },
  });

  res
    .status(200)
    .json({ message: `${delUsers.count} Usuário(s) deletado(s) com sucesso!` });
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port} 🚀`);
}); // escolhe a porta que vai rodar o servidor

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
