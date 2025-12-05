import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../Config";

const auth = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const header = req.headers.authorization;

      if (!header) {
        return res.status(401).json({
          success: false,
          msg: "No token provided. Access denied.",
        });
      }

      // Extract "Bearer tokenValue"
      const token = header.startsWith("Bearer ")
        ? header.split(" ")[1]
        : header;

      const decoded = jwt.verify(token!, config.jwt!) as JwtPayload;

      req.user = decoded; // attach decoded JWT to request

      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        msg: "Invalid or expired token",
        error: (err as Error).message,
      });
    }
  };
};

export default auth;
