// import { pool } from "../../Config/db";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const loginUser = async (email: string, password: string) => {
//   const result = await pool.query(`SELECT * FROM email = $1`, [email]);
//   console.log({result});
//   if (result.rows.length == 0) {
//     return null;
//   }

//   const user = result.rows[0];
//   console.log({user});

//   const matchPass = await bcrypt.compare(password, user.password);
//   if (!matchPass) {
//     return false;
//   }

//   // jwt token
//   const secret = "KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
//   const token = jwt.sign({ name: user.name, email: user.email }, secret, {
//     expiresIn: "3d",
//   });

//   return { token, user };
// };

// export const authServices = {
//   loginUser,
// };

import { pool } from "../../Config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../Config";

const loginUser = async (email: string, password: string) => {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );

  if (result.rows.length === 0) return null;

  const user = result.rows[0];

  const matchPass = await bcrypt.compare(password, user.password);

  if (!matchPass) return false;

  const secret = `${process.env.jwt_secret}`
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    secret,
    { expiresIn: "3d" }
  );

  return { token, user };
};

export const authServices = { loginUser };
