import { Router } from "express";
import { authController } from "./auth.controller";
// * routes -> controller -> services
// * http:localhost:5000/auth/login
const router = Router();
router.post("/login", authController.loginUser);

export const authRouter = router;
