import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await authServices.loginUser(email, password);

    if (result === null) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    if (result === false) {
      return res.status(400).json({ success: false, msg: "Invalid password" });
    }

    return res.status(200).json({
      success: true,
      msg: "Login successful",
      data: result,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      msg: err.message,
    });
  }
};

export const authController = { loginUser };
