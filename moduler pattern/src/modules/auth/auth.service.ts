import bcrypt from "bcryptjs"
import { pool } from "../../dbStorage/db"
import jwt from "jsonwebtoken"

const loginUserintoDB = async(email : string , password : string)=>{
  const user = await pool.query(`
    SELECT * FROM users WHERE email = $1
    `, [email])

    // const matchPass = await bcrypt.compare(password, user.rows[0].password);



    const jwtpayload = {
      id : user.rows[0].id,
      name : user.rows[0].name,
      email : user.rows[0].email
    }

    const secret = "KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"

    const token = jwt.sign(jwtpayload, secret ,{
      expiresIn: "3d"
    })
    return {token , user : user.rows[0]}
}

export const authService = {
    loginUserintoDB
}

