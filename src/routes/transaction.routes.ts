import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { userCheck } from "../middlewares/user.middleware";
import { cpfCheck } from "../middlewares/cpf.middleware";
import { TransactionController } from "../controllers/transactions.controller";
import { transactionCheck } from "../middlewares/transaction.middleware";

export const transactionRoutes = () => {
  const app = Router({ mergeParams: true });

  app.post("/", [transactionCheck], new TransactionController().create);
  app.get("/:transactionid", new TransactionController().get);
  app.get("/", new TransactionController().list);

  return app;
};
