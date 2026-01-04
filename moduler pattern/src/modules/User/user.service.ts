import { pool } from "../../dbStorage/db";
import bcrypt from "bcryptjs";
const createUserintoDB = async (payload: Record<string, unknown>) => {
  const { name, email, password } = payload;
  const hasspass = await bcrypt.hash(password as string, 12);
  const result = await pool.query(
    `
     INSERT INTO users (name , email , password) VALUES ($1 , $2 ,$3) RETURNING * 
    `,
    [name, email, hasspass]
  );

  return result;
};

const getUserintoDB = async () => {
  const result = await pool.query(
    `
     SELECT * FROM users  
    `
  );

  return result;
};

export const userServices = {
  createUserintoDB,
  getUserintoDB,
};
