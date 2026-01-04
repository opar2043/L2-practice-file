
import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result =await userServices.createUserintoDB(req.body);

   return res.status(201).json({
      success: true,
      message: "User created",
      data: result.rows[0],
    });
  } catch (error : any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getUser = async (req: Request, res: Response) => {
  try {
    const result =await userServices.getUserintoDB();

   return res.status(201).json({
      success: true,
      message: "User created",
      data: result.rows,
    });
  } catch (error : any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userControler = {
  createUser,
  getUser
};
