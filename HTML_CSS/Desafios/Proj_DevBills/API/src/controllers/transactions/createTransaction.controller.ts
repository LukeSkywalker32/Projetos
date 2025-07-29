import type { FastifyReply, FastifyRequest } from "fastify";
import { createTransactionSchema } from "../../schemas/transaction.schema";
import prisma from "../../config/prisma";

const createTransaction = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const userId = "ABCDEF"; // userId => request.userId

  if (!userId) {
    return reply.status(401).send({ error: "Não autenticado" });
  }

  const result = createTransactionSchema.safeParse(request.body);

  if (!result.success) {
    const formatted = result.error.format();
    const errors: Record<string, string> = {};

    Object.keys(formatted).forEach((key) => {
      // Ignora erros globais e propriedades especiais
      if (key !== "_errors" && key !== "$schema") {
        const field = formatted[key as keyof typeof formatted];

        if (field && "_errors" in field && field._errors.length > 0) {
          errors[key] = field._errors[0];
        }
      }
    });

    return reply.status(400).send({
      error: "Dados inválidos",
      details: errors,
    });
  }

  const transactionData = result.data;

  try {
    const category = await prisma.category.findFirst({
      where: {
        id: transactionData.categoryId,
        type: transactionData.type,
      },
    });

    if (!category) {
      return reply.status(400).send({ error: "Categoria inválida" });
    }

    const newTransaction = await prisma.transaction.create({
      data: {
        ...transactionData,
        userId,
        date: new Date(transactionData.date),
      },
      include: {
        category: true,
      },
    });
    return reply.status(201).send(newTransaction);


  } catch (error) {
    request.log.error("Erro na criação de transação:", error);
    return reply.status(500).send({ error: "Erro interno do servidor" });
  }
};

export default createTransaction;
