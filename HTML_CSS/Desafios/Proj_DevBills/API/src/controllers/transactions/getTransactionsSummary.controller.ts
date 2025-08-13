import type { FastifyReply, FastifyRequest } from "fastify";
import type { GetTransactionsSummaryQuery } from "../../schemas/transaction.schema";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import prisma from "../../config/prisma";
import { CategorySummary } from "../../types/category.types";
import { TransactionType } from "@prisma/client";
import { TransactionSummary } from "../../types/transaction.types";

dayjs.extend(utc);

export const getTransactionsSummary = async (
  request: FastifyRequest<{ Querystring: GetTransactionsSummaryQuery }>,
  reply: FastifyReply
): Promise<void> => {
  const userId = "ABCDEF"; // userId => request.userId

  if (!userId) {
    return reply.status(401).send({ error: "Não autenticado" });
  }

  const { month, year } = request.query;

  if (!month || !year) {
    return reply.status(400).send({ error: "Mês e ano são obrigatórios" });
  }

  const startDate = dayjs.utc(`${year}-${month}-01`).startOf("month").toDate();
  const endDate = dayjs.utc(startDate).endOf("month").toDate();

  try {
    // Usa o Prisma para buscar várias transações (`findMany`) no banco de dados.
    const transactions = await prisma.transaction.findMany({
      // Aplica os filtros construídos anteriormente.
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { date: "desc" },
      // Inclui dados da categoria relacionada a cada transação.
      include: {
        category: true,
      },
    });

    let totalExpenses = 0; //total de despesas
    let totalIncomes = 0; //total de entradas
    const groupedExpenses = new Map<string, CategorySummary>();

    for (const transaction of transactions) {
      if (transaction.type === TransactionType.expense) {
        const existing = groupedExpenses.get(transaction.categoryId) ?? {
          categoryId: transaction.categoryId,
          categoryName: transaction.category.name,
          categoryColor: transaction.category.color,
          amount: 0,
          percentage: 0,
        };

        existing.amount += transaction.amount;
        groupedExpenses.set(transaction.categoryId, existing);

        totalExpenses += transaction.amount;
      } else {
        // Se a transação for do tipo "entrada", soma o valor ao total de entradas.
        totalIncomes += transaction.amount;
      }
    }

    const summary: TransactionSummary = {
      totalExpenses,
      totalIncomes,
      balance: totalIncomes - totalExpenses,
      expensesByCategory: Array.from(groupedExpenses.values())
        .map((entry) => ({
          ...entry,
          percentage: Number.parseFloat(
            ((entry.amount / totalExpenses) * 100).toFixed(2)
          ),
        }))
        .sort((a, b) => b.amount - a.amount),
    };
    console.log("Resumo das transações: ", summary);
    reply.send({ summary });
  } catch (err) {
    // Se ocorrer um erro no bloco try...
    // Loga o erro no console do servidor para depuração.
    request.log.error("Erro ao buscar transações: ", err);
    // Envia uma resposta de erro com status 500 (Erro Interno do Servidor).
    reply.status(500).send({ error: "Erro do Servidor 🆘" });
  }
};
