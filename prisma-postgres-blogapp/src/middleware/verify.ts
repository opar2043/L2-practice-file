
import { NextFunction, Request, Response } from "express";
import  {auth as betterauth}  from "../middleware/verify";

export enum UserRole {
     USER = "USER",
     ADMIN = "ADMIN"
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: string;
      };
    }
  }
}


export const auth = (...role: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session = await betterauth.api.getSession({
      headers: req.headers as any,
    });

    console.log(session);

    if (!session) {
      return res.status(400).json({
        success: false,
        message: "You are not authorized",
      });
    }

    if (!session.user.emailVerified) {
      return res.status(400).json({
        success: false,
        message: "Email is not verified",
      });
    }

    req.user = {
       id : session.user.id,
       email : session.user.email,
       name : session.user.name,
       role : session.user.role
    }
    next()
  };
};