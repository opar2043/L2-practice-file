import auth from "../../dataset/auth";
import { userController } from "./user.controller";
import { Router } from "express";


const router = Router();
router.post ("/" , userController.createUser);
router.get("/", userController.getUser);
router.get("/single", userController.getsingleUser);
export const userRouter = router;