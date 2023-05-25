import { Request, Response } from "express";
import { User } from "../models/user";
import { usersDb } from "../database/users";
import { ApiResponse } from "../util/http-response.adapter";

export class UserController {
  public create(req: Request, res: Response) {
    try {
      const { name, cpf, email, age } = req.body;

      const user = new User(name, cpf, email, age);
      usersDb.push(user);
      return ApiResponse.success(res, "Usuario criado com sucesso!", user);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = usersDb.find((user) => user.id === id);

      if (!result) {
        return ApiResponse.notFound(res, "Usuario");
      }

      return ApiResponse.success(
        res,
        "Usuario filtrado por id com sucesso!",
        result.toJson()
      );
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}
