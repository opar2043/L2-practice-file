import { Request, Response, Router } from "express";
import { pool } from "../../dbStorage/db";
import { userControler } from "./user.controller";
import verify from "../../middleware/verify";


const router = Router();

router.post("/",  userControler.createUser)

export const userRoute = router