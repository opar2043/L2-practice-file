import { RequestHandler } from "express";
import { authService } from "./auth.service";

const loginUser : RequestHandler = async (req, res)=>{
      try {
        const result =await authService.loginUserintoDB(req.body.email ,req.body.password)

       return res.status(201).json({
          success: true,
          message: "User created",
          data: result
        });
        
      } catch (error : any) {
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }
}


export const authController = {
    loginUser
}