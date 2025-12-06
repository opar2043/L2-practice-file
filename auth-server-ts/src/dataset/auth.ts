import e, { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { secret } from "../modules/auth/auth.service";
import { pool } from "./db";
const auth = ()=>{
    return async (res : Response , req : Request , next : NextFunction)=>{
       const token = req.headers.authorization;
       console.log(token)
       if(!token){
        return res.status(401).json({message : "Unauthorized"})
       }

       const decoded = jwt.verify(token , secret ) as JwtPayload;
       console.log(decoded);

       const user = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [(decoded as any).email]
       );

       if(user.rows.length == 0){
        return res.status(401).json({message : "Unauthorized"})
       }

        // req.user = decoded

       next();
    }
}

export default auth;