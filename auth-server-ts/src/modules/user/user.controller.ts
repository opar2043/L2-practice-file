import { Request, Response } from "express";
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

// Newly added getUser controller function
const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUserDb();
    console.log(result);
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


const getsingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getsingleUsersDb(req.params?.email as string);
    console.log(result);
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const userController = {
  createUser,
  getUser,
  getsingleUser
};
