import express, { Request, Response } from "express";
import { User } from "./models/user";
import { usersDb } from "./database/users";
import { userRoutes } from "./routes/user.routes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRoutes());

app.listen(process.env.PORT, () => {
  console.log("API is running...");
});
