import { Response } from "express";

export class ApiResponse {
  public static serverError(res: Response, error: any) {
    return res.status(500).send({
      ok: false,
      message: error.toString(),
    });
  }

  public static notFound(res: Response, entity: string) {
    return res.status(404).send({
      ok: false,
      message: `${entity} não encontrado.`,
    });
  }

  public static notProvided(res: Response, field: string) {
    return res.status(400).send({
      ok: false,
      message: `${field} não fornecido..`,
    });
  }

  public static success(res: Response, message: string, data: any) {
    return res.status(200).send({
      ok: true,
      message,
      data,
    });
  }
}
