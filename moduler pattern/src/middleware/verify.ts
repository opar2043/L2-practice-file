import { RequestHandler } from "express";

const verify : RequestHandler = (req , res , next) => {
  console.log("Jete parben na!");
}

export default verify