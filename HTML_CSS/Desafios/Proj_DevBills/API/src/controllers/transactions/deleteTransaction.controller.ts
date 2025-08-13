import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteTransactionParams } from "../../schemas/transaction.schema";
import prisma from "../../config/prisma";

export const deleteTransaction = async (
  request: FastifyRequest<{ Params: DeleteTransactionParams }>,
  reply: FastifyReply
): Promise<void> => {
  const userId = "ABCDEF";
  const { id } = request.params;

  if (!userId) {
    return reply.status(401).send({ error: "Usuário não autenticado" });
  }

  try {
    const transaction = await prisma.transaction.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!transaction) {
      return reply.status(400).send({ error: "Transação não encontrada" });
    }
    await prisma.transaction.delete({
      where: { id },
    });
    return reply
      .status(200)
      .send({ message: "Transação deletada com sucesso" });
  } catch (err) {
    request.log.error({ message: "Erro ao deletar transação", error: err });
    return reply.status(500).send({ error: "Erro interno do servidor" });
  }
};
