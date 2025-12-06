import bcrypt from "bcryptjs";
import { pool } from "../../dataset/db";
import jwt from "jsonwebtoken"
export const secret = "KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

const loginUserDb = async (email : string , password : string) =>{
  
    const user = await pool.query(
      `SELECT * FROM users WHERE email = $1 AND password = $2`,
      [email , password]
    );

    const matchPass = await bcrypt.compare(password , user.rows[0].password)
     if(!matchPass){
        throw new Error ("Invalid Credentials");
     }

     if(user.rows.length == 0){
        throw new Error ("User not found");
     }

     const payload = {
        id: user.rows[0].id,
        user : user.rows[0].email
     }
     const token = jwt.sign(payload, secret, {
      expiresIn: "3d"
     })

    return {user, token};
}

export const authServices = {
    loginUserDb
}