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


const getUserDb = async () => {
  const result = await pool.query(`
    SELECT id, name, email 
    FROM users
    ORDER BY id ASC
  `);

  return result;
};

const getsingleUsersDb = async (email : String) => {
  const result = await pool.query(`
    SELECT id, name, email 
    FROM users WHERE email = $1
    ORDER BY id ASC
  `, [email]);

  return result;
};


export  const userServices = {
    createUserDb,
    getUserDb,
    getsingleUsersDb
}