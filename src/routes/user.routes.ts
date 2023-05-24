import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { userCheck } from "../middlewares/user.middleware";

export const userRoutes = () => {
  const app = Router();

  app.post("/", [userCheck], new UserController().create);

  return app;
};
