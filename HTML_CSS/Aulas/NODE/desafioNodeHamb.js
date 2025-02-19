import express from "express";
import { v4 as uuidv4 } from "uuid";

//Aqui eu importo os middlewares
import { logRequest, validateId } from "./Middlewares_hamb.js";

const app = express();
const uuid = uuidv4();
const port = 3000;
app.use(express.json());

// criei um array de pedidos
let orders = [];

//Rota POST - crio o pedido
app.post("/order", (req, res) => {
  const { order, clientName, price } = req.body;

  if (!order || !clientName || !price) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios!" });
  }

  const newOrder = {
    id: uuidv4(),
    order,
    clientName,
    price,
    status: "Em preparação",
  };
  orders.push(newOrder); // aqui eu add o pedido ao array
  return res.status(201).json(orders);
});
// ---------------------------------------
//Rota GET - listo os pedidos criados
app.get("/order", (req, res) => {
  return res.status(200).json(orders);
});
// ---------------------------------------
// Rota GET /order/:id - Buscar um pedido específico pelo ID
app.get("/order/:id", validateId(orders), (req, res) => {
  const { id } = req.params;
  const order = orders.find((item) => item.id === id);
  return res.status(200).json(order);
});
// ---------------------------------------
// Rota PUT /order/:id - Atualizar um pedido existente pelo ID
app.put("/order/:id", validateId(orders), (req, res) => {
  const { id } = req.params;
  const { order, clientName, price } = req.body;

  const orderIndex = orders.findIndex((item) => item.id === id);

  orders[orderIndex] = {
    ...orders[orderIndex],
    order: order || orders[orderIndex].order,
    clientName: clientName || orders[orderIndex].clientName,
    price: price || orders[orderIndex].price,
  };
  return res
    .status(200)
    .json({message: "Pedido atualizado com sucesso!",
           order: orders[orderIndex],
    });
});
// ---------------------------------------
// Rota DELETE /order/:id - Excluir um pedido existente pelo ID
app.delete("/order/:id", validateId(orders), (req, res) => {
  const { id } = req.params;

  orders = orders.filter((item) => item.id !== id);
  return res.status(201).json({ message: "Pedido excluído com sucesso!" });
});
// ---------------------------------------
// Rota PATCH /order/:id - Alterar o status do pedido para "Pronto"
app.patch("/order/:id", validateId(orders), (req, res) => {
  const { id } = req.params;

  const orderIndex = orders.findIndex((item) => item.id === id);

  orders[orderIndex].status = "Pronto";

  return res
    .status(200)
    .json({message: "Status do pedido atualizado com sucesso!",
           order: orders[orderIndex],
    });
});

app.use(logRequest);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port} 🚀`);
}); // escolhe a porta que vai rodar o servidor
