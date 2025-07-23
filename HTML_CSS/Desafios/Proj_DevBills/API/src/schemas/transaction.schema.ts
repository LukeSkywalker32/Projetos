import { z } from "zod";
import { ObjectId } from "mongodb";
import { TransactionType } from "@prisma/client";

const isValidObjectId = (id: string): boolean => {
  return ObjectId.isValid(id);
};

export const createTransactionSchema = z.object({
  description: z.string().min(3, "Descrição Obrigatória"),
  amount: z.number().positive("Valor deve ser positivo"),
  date: z.coerce
    .date()
    .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
      message: "Data inválida",
    }),
  categoryId: z.string().refine(isValidObjectId, {
    message: "Categoria inválida",
  }),
  type: z.enum([TransactionType.income, TransactionType.expense], {
    error: "Tipo inválido",
  }),
});
