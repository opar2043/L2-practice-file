import express, { Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = 5000;

// parser
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Server!");
});

// db
const pool = new Pool({
  connectionString: `${process.env.Pool_String}`,
});

const initDb = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(15),
        adress TEXT
        )
        `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS todos(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT false
    )  
  `);
};

initDb();

// users route
app.post("/users", async (req, res) => {
  console.log(req.body);
  const { name, email, age } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users (name, email , age) VALUES ($1, $2 , $3) RETURNING *`,
      [name, email, age]
    );

    console.log(result.rows);

    res.status(200).json({
      success: true,
      msg: "Data Inserted",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      msg: err.msg,
    });
  }
});

app.get("/users", async (req: Request, res: Response) => {
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

app.get("/users/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    console.log(result.rows);

    if (result.rows.length == 0) {
      res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }else{
          res.status(200).json({
      success: true,
      msg: "Users Fetched succesfully",
      data: result.rows[0]
  });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      msg: err.msg,
    });
  }
});


app.delete("/users/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
    console.log(result.rows);

    if (result.rows.length == 0) {
      res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }else{
          res.status(200).json({
      success: true,
      msg: "Deleted succesfully",
      data: null
  });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      msg: err.msg,
    });
  }
});

app.put("/users/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10); // convert to number

  const { name, email, age } = req.body;

  if (Number.isNaN(id)) {
    return res.status(400).json({
      success: false,
      msg: "Invalid user id",
    });
  }

  try {
    const query = `
      UPDATE users
      SET name = $1,
          email = $2,
          age = $3
      WHERE id = $4
      RETURNING *;
    `;

    const values = [name, email, age, id];

    const result = await pool.query(query, values);
    console.log(result.rows);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        msg: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      msg: "User updated successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({
      success: false,
      msg: err.message || "Something went wrong",
    });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
