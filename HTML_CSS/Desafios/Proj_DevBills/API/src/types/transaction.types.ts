import type { TransactionType } from "@prisma/client";

export interface TransactionFilter {
  userId: string;
  date?: {
    gte: Date;
    lte: Date;
  };
  type?: TransactionType;
  categoryId?: string;
}

//gte = maior ou igual (zod)
//lte = menor ou igual (zod)
// acaba criando um range de datas