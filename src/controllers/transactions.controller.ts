import { Request, Response } from "express";
import { ApiResponse } from "../util/http-response.adapter";
import { usersDb } from "../database/users";
import { Transactions, TypeTransaction } from "../models/transactions";
import { transactionsDb } from "../database/transactions";

export class TransactionController {
  public create(req: Request, res: Response) {
    try {
      const { userid } = req.params;
      const { title, value, type } = req.body;

      const existeUser = usersDb.find((user) => user.id === userid);
      if (!existeUser) {
        return ApiResponse.notFound(res, "User666");
      }

      const transaction = new Transactions(title, value, type);
      existeUser.transactions.push(transaction);
      return ApiResponse.success(res, "teste!", existeUser);

      //   return ApiResponse.success(res, "Usuario criado com sucesso!", user);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public get(req: Request, res: Response) {
    try {
      const { userid, transactionid } = req.params;

      const existeIdUser = usersDb.find((user) => user.id === userid);
      if (!existeIdUser) {
        return ApiResponse.notFound(res, "User");
      }
      const existeIdTransaction = existeIdUser.transactions.find(
        (item) => item.id === transactionid
      );
      if (!existeIdTransaction) {
        return ApiResponse.notFound(res, "Transaction");
      }

      return ApiResponse.success(
        res,
        "Transaction filtrado por id com sucesso!",
        existeIdTransaction.toJsonT()
      );
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public list(req: Request, res: Response) {
    try {
      const { userid } = req.params;

      const existeIduser = usersDb.find((user) => user.id === userid);
      if (!existeIduser?.transactions) {
        return ApiResponse.notFound(
          res,
          `Transsação do usuario ${existeIduser?.name} não encontrado!`
        );
      }

      let credito = existeIduser.transactions
        .filter((t) => t.type === TypeTransaction.Credit)
        .reduce((soma, transaction) => soma + transaction.value, 0);

      let debito = existeIduser.transactions
        .filter((t) => t.type === TypeTransaction.Debit)
        .reduce((soma, transaction) => soma + transaction.value, 0);

      let transaction = existeIduser.transactions;

      return ApiResponse.success(res, "Transações listadas com sucesso", {
        transaction,
        balance: { credito, debito, total: credito - debito },
      });
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}
