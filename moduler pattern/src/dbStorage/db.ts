import { Pool } from "pg";

export const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_y8Jrilz5CsHf@ep-broad-voice-adbpm63u-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDB = async () => {
  await pool.query(`
     CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY ,
      name VARCHAR(100),
      email VARCHAR(100) NOT NULL,
      password TEXT NOT NULL,
      age INT ,
      createdAT TIMESTAMP DEFAULT NOW()
     )
     `);

  console.log("Data Base Connected");
};


export default initDB