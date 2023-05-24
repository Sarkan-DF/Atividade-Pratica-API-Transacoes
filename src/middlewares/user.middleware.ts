import { NextFunction, Request, Response } from "express";
import { usersDb } from "../database/users";

export const userCheck = (req: Request, res: Response, next: NextFunction) => {
  const { name, cpf, email, age } = req.body;

  if (!name) {
    return res.status(400).send({
      ok: false,
      message: "Nomes was not provided",
    });
  }

  if (!cpf) {
    return res.status(400).send({
      ok: false,
      message: "Cpf was not provided",
    });
  }

  if (!email) {
    return res.status(400).send({
      ok: false,
      message: "Email was not provided",
    });
  }

  if (!age) {
    return res.status(400).send({
      ok: false,
      message: "Age was not provided",
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
