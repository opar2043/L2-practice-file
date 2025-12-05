import express, { Request, Response } from "express"
import { pool } from "../../Config/db";
const router = express.Router();

// * routes -> controller -> services

// app.use("/users", userRoute)
router.post("/", );


router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM users
    `);

    res.status(200).json({
      success: true,
      msg: "Users Table Shows Successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export const userRoutes = router