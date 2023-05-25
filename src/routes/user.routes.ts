import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { userCheck } from "../middlewares/user.middleware";
import { cpfCheck } from "../middlewares/cpf.middleware";

export const userRoutes = () => {
  const app = Router();

  app.post("/", [userCheck, cpfCheck], new UserController().create);
  app.get("/:id", new UserController().get);

  return app;
};
