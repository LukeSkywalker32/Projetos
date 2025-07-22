import dotenv from "dotenv";
import app from "./app";
import { prismaConnect } from "./config/prisma";
import { initializedGlobalCategories } from "./services/globalCategories.service";

dotenv.config();

const PORT = Number(process.env.PORT);
const startServer = async () => {
  try {
    await prismaConnect();
    await initializedGlobalCategories();
    await app.listen({ port: PORT }).then(() => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();
