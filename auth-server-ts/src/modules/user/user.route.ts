import { Request, Response, Router } from "express";
import { pool } from "../../dataset/db";
import { userController } from "./user.controller";
import verify from "../../middleware/verify";


const router = Router();
router.post ("/" , verify, userController.createUser)
export const userRouter = router;