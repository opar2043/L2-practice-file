import { NextFunction, Request, Response } from "express";

const verify = (req: Request, res: Response, next:NextFunction) => {
  console.log("Ami Tomake jete debo na");
  next();
}

export default verify;