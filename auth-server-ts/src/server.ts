import express, { Response, Request } from "express";
import { Pool } from "pg";
import initDb from "./dataset/db";
import { userRouter } from "./modules/user/user.route";
import { authRouter } from "./modules/auth/auth.route";
const app = express();
const PORT = 5000;
app.use(express.json());


initDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// http://localhost:5000/api/v1/users
// http://localhost:5000/api/v1/auth/login
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is up and running!");
});
