import { Request, Response } from "express";
import { pool } from "../../Config/db";
import { userService } from "./user.service";

 const createUser = async (req : Request, res : Response) => {
  console.log(req.body);
  const { name, email, age } = req.body;

  try {
    const result = userService.createUser(name ,email, age );


    res.status(200).json({
      success: true,
      msg: "Data Inserted",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      msg: err.msg,
    });
  }
}

const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    console.log(result.rows);

    if (result.rows.length == 0) {
      res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }else{
          res.status(200).json({
      success: true,
      msg: "Users Fetched succesfully",
      data: result.rows[0]
  });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      msg: err.msg,
    });
  }
}

export const userController = {
    createUser,
    getUser
}