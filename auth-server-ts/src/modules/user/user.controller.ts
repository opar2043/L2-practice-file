import { Request, Response } from "express";
import { pool } from "../../dataset/db";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUserDb(req.body);
    res.status(200).json({
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (error : any) {
    res.status(200).json({
      success: false,
      message: "Somethingh went wrong",
    });
  }
};

export const userController = {
  createUser,
};
