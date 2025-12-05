import { Pool } from "pg";

export const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_4znT1tpNkvAq@ep-dark-salad-a80n7a1x-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDb = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );
   `);

  console.log("data base connected");
};

export default initDb;
