import { Request, Response } from "express";
import { authServices } from "./auth.service";
const loginUser = async(req: Request, res: Response)=>{
     try {
        const email = req.body.email;
        const password = req.body.password;
       const result = await authServices.loginUserDb(email, password);
       res.status(200).json({
         message: "User created successfully",
         data: result,
       });
     } catch (error : any) {
       res.status(200).json({
         success: false,
         message: "Somethingh went wrong",
       });
     }
}

export const authController = {
    loginUser
}