import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { userCheck } from "../middlewares/user.middleware";
import { cpfCheck } from "../middlewares/cpf.middleware";
import { transactionRoutes } from "./transaction.routes";

export const userRoutes = () => {
  const app = Router();

  app.post("/", [userCheck, cpfCheck], new UserController().create);
  app.get("/:id", new UserController().get);
  app.get("/", new UserController().list);
  app.delete("/:id", new UserController().delete);
  app.put("/:id", new UserController().update);

  app.use("/:userid/transactions", transactionRoutes());

  return app;
};
