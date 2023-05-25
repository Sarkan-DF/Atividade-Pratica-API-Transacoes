import { NextFunction, Request, Response } from "express";
import { usersDb } from "../database/users";
import { cpf as validaCpf } from "cpf-cnpj-validator";
import { ApiResponse } from "../util/http-response.adapter";

export const cpfCheck = (req: Request, res: Response, next: NextFunction) => {
  const { cpf } = req.body;

  if (!cpf) {
    return ApiResponse.notFound(res, "CPF");
  }

  const cpfValido = validaCpf.isValid(cpf);
  if (!cpfValido) {
    return res.status(403).send({
      ok: false,
      message: "Cpf invalido",
    });
  }

  const existeCpf = usersDb.some((item) => item.cpf === cpf);
  if (existeCpf) {
    return res.status(403).send({
      ok: false,
      message: "Cpf já cadastrado",
    });
  }
  next();
};
