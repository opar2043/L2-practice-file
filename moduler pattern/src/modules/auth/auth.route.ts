
import { Router } from "express";




const router = Router();

router.post("/login",  userControler.createUser)

export const authRoute = router