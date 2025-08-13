import { FastifyReply, FastifyRequest } from "fastify";
import { GetTransactionsQuery } from "../../schemas/transaction.schema";
import { TransactionFilter } from "../../types/transaction.types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import prisma from "../../config/prisma";

// Estende o dayjs com o plugin UTC para que as operações de data usem UTC.
dayjs.extend(utc);

// Define a função assíncrona 'getTransactions' que será o handler da rota.
export const getTransactions = async (
  // Tipa o objeto 'request' com FastifyRequest, especificando que a Querystring
  // deve seguir o formato de GetTransactionsQuery.
  request: FastifyRequest<{
    Querystring: GetTransactionsQuery;
  }>,
  // Tipa o objeto 'reply' com FastifyReply.
  reply: FastifyReply
): Promise<void> => {
  // A função não retorna um valor diretamente, ela envia a resposta através do 'reply'.
  // Define um ID de usuário fixo. Em uma aplicação real, isso viria do token de autenticação.
  const userId = "ABCDEF";

  // Verifica se o userId existe (simulando uma verificação de autenticação).
  if (!userId) {
    // Se não houver usuário, retorna um status 401 (Não Autorizado) com uma mensagem de erro.
    reply.status(401).send({ error: "Não autenticado" });
    // Interrompe a execução da função.
    return;
  }

  // Extrai os parâmetros de query (mês, ano, tipo, id da categoria) da requisição.
  const { month, year, type, categoryId } =
    request.query as GetTransactionsQuery;

  // Cria um objeto de filtro inicial com o ID do usuário para garantir que
  // apenas as transações desse usuário sejam retornadas.
  const filters: TransactionFilter = { userId };

  // Verifica se 'month' e 'year' foram fornecidos na query.
  if (month && year) {
    // Cria a data de início do mês em UTC.
    const startDate = dayjs
      .utc(`${year}-${month}-01`)
      .startOf("month")
      .toDate();
    // Cria a data de fim do mês em UTC.
    const endDate = dayjs.utc(startDate).endOf("month").toDate();
    // Adiciona o filtro de data ao objeto de filtros.
    // gte: greater than or equal (maior ou igual a)
    // lte: less than or equal (menor ou igual a)
    filters.date = {
      gte: startDate,
      lte: endDate,
    };
  }
  // Se o parâmetro 'type' foi fornecido, adiciona ao filtro.
  if (type) {
    filters.type = type;
  }
  // Verifica se 'categoryId' é uma string e não está vazia.
  if (typeof categoryId === "string" && categoryId.trim() !== "") {
    // Se for válido, adiciona ao filtro.
    filters.categoryId = categoryId;
  }

  try {
    // Usa o Prisma para buscar várias transações (`findMany`) no banco de dados.
    const transactions = await prisma.transaction.findMany({
      // Aplica os filtros construídos anteriormente.
      where: filters,
      // Ordena os resultados pela data em ordem decrescente (mais recentes primeiro).
      orderBy: { date: "desc" },
      // Inclui dados da categoria relacionada a cada transação.
      include: {
        category: {
          // Seleciona apenas os campos 'color', 'name' e 'type' da categoria.
          select: {
            color: true,
            name: true,
            type: true,
          },
        },
      },
    });
    // Envia a resposta com status 200 (OK por padrão) e o array de transações encontradas.
    reply.send({ transactions });
  } catch (err) {
    // Se ocorrer um erro no bloco try...
    // Loga o erro no console do servidor para depuração.
    request.log.error("Erro ao buscar transações: ", err);
    // Envia uma resposta de erro com status 500 (Erro Interno do Servidor).
    reply.status(500).send({ error: "Erro do Servidor 🆘" });
  }
};
