import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../util/http-response.adapter";

export const userCheck = (req: Request, res: Response, next: NextFunction) => {
  const { name, cpf, email, age } = req.body;

  if (!name) {
    return ApiResponse.notProvided(res, "Nome");
  }

  if (!cpf) {
    return ApiResponse.notProvided(res, "Cpf");
  }

  if (!email) {
    return ApiResponse.notProvided(res, "Email");
  }

  if (!age) {
    return ApiResponse.notProvided(res, "Idade");
  }
  next();
};
