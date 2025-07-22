import type { FastifyReply, FastifyRequest } from "fastify";

const createTransaction = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const userId = "ABCDEF";

  if (!userId) {
    reply.status(401).send({ error: "Não autenticado" });
  }
};

export default createTransaction;
