import { pool } from "../../Config/db";

const createUser = async ()=>{
        const result = await pool.query(
          `INSERT INTO users (name, email , age) VALUES ($1, $2 , $3) RETURNING *`,
          [name : String, email : String, age : Number]
        );

        return result
}

export const userService = {
    createUser
}