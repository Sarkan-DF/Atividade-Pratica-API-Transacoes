import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../util/http-response.adapter";

export const transactionCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, value, type } = req.body;

  if (!title) {
    return ApiResponse.notProvided(res, "Titulo");
  }

  if (!value) {
    return ApiResponse.notProvided(res, "Valor");
  }

  if (!type) {
    return ApiResponse.notProvided(res, "Tipo");
  }

  if (type !== "Debito" && type !== "Credito") {
    return ApiResponse.notFound(
      res,
      "Tipo de valor invado! (Debito ou Credito)"
    );
  }

  next();
};
