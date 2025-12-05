import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
    connection_str : process.env.Pool_String,
    port : process.env.PORT,
    jwt : process.env.jwt_secret
};
export default config