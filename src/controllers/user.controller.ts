import { Request, Response } from "express";
import { User } from "../models/user";
import { usersDb } from "../database/users";

export class UserController {
  public create(req: Request, res: Response) {
    try {
      const { name, cpf, email, age } = req.body;

      const user = new User(name, cpf, email, age);
      usersDb.push(user);

      return res.status(201).send({
        ok: true,
        message: "User was successfully created",
        data: user,
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
