import express, { Request, Response } from "express";
import { User } from "./models/user";
import { usersDb } from "./database/users";
import { userRoutes } from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes());

app.listen(3333, () => {
  console.log("API is running...");
});
