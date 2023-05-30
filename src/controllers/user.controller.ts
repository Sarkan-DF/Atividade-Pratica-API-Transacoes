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

  public list(req: Request, res: Response) {
    try {
      const { name, cpf, email } = req.query;

      let result = usersDb;

      if (name) {
        result = usersDb.filter((user) => user.name === name);
      }

      if (cpf) {
        result = usersDb.filter((user) => user.cpf === cpf);
      }

      if (email) {
        result = usersDb.filter((user) => user.email === email);
      }

      return ApiResponse.success(
        res,
        "Lista de usuarios",
        result.map((users) => users.toJson())
      );
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const userIndex = usersDb.findIndex((user) => user.id === id);

      if (userIndex < 0) {
        return ApiResponse.notFound(res, "Id");
      }

      const deleteUser = usersDb.splice(userIndex, 1);

      return ApiResponse.success(
        res,
        "Usuario deletado com sucesso",
        deleteUser[0].toJson()
      );
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, cpf, email, age } = req.body;

      const userFind = usersDb.find((user) => user.id === id);

      if (!userFind) {
        return ApiResponse.notFound(res, "Id");
      }

      if (name) {
        userFind.name = name;
      }

      if (cpf) {
        userFind.cpf = cpf;
      }

      if (email) {
        userFind.email = email;
      }

      if (age) {
        userFind.age = age;
      }

      return ApiResponse.success(
        res,
        "Usuario atualizado com sucesso!",
        userFind.toJson()
      );
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}
