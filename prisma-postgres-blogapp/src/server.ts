
import app from "./app";
import { prisma } from "./lib/prisma";
const port = process.env.PORT || 3000;


async function main() {
    try{
      await prisma.$connect();
      console.log("Connected to the database successfully");
      app.listen(port , ()=> {
        console.log("Server running at port " + port);
      })
    }catch(err){
      console.log("Error happen" , err);
      await prisma.$disconnect();
      process.exit(1);
    }
}

main()