import express, { Request, Response } from "express";
import { User } from "./models/user";
import { usersDb } from "./database/users";

const app = express();
app.use(express.json());
// app.use();

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, email, age } = req.body;

    console.log(name);

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

    const user = new User(name, cpf, email, age);
    usersDb.push(user);

    return res.status(201).send({
      ok: true,
      message: "Growdever was successfully created",
      data: user,
    });
  } catch (error: any) {
    return res.status(500).send({
      ok: false,
      message: "Erro interno",
    });
  }
});

app.listen(3333, () => {
  console.log("API is running...");
});
