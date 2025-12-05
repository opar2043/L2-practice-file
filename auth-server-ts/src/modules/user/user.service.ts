import { pool } from "../../dataset/db";
import bcrypt from "bcryptjs";

const createUserDb = async (payload: Record<string, any>) => {
    const { name, email, password } = payload ;
    const hashPass = await bcrypt.hash(password, 10);
    const result = await pool.query(
      ` INSERT INTO users (name , email , password) VALUES($1 , $2 , $3) RETURNING *`,
      [name, email, hashPass]
    );

    return result;
}


export  const userServices = {
    createUserDb
}