import type { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../config/prisma";

export const getCategories = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

    reply.send(categories);
  } catch (error) {
    request.log.error("Erro ao buscar categorias:", error);
    reply.status(500).send({ error: "Erro ao buscar categorias" });
  }
};
