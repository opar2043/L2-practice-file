import app from "./app";
import initDB from "./dbStorage/db";
import { authRoute } from "./modules/auth/auth.route";
import { userRoute } from "./modules/User/user.route";

initDB();

const PORT = 5000;

// POST route    http://localhost:5000/api/v1/users
app.use("/api/v1/users",userRoute);
// POST route    http://localhost:5000/api/v1/users/login
app.use("/api/v1/auth" , authRoute)


//? app.post("/api/v1/users",async (req: Request, res: Response) => {
//?     const {name ,email,password} = req.body;
//?     const result =await pool.query(`
//?        INSERT INTO users (name , email , password) VALUES ($1 , $2 ,$3) RETURNING * 
//?       ` , [name,email , password])
//?
//?     res.status(201).json({
//?       success: true,
//?       message: "User received",
//?       data: result.rows[0],
//?     });
//?   }
//? );

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
