import { prisma } from "../lib/prisma";
import { UserRole } from "../middleware/verify";

async function seedAdmin() {
    try {
        const adminData = {
            name : "admin sahed",
            email: "admin1@admin.com",
            role: UserRole.ADMIN,
            password : "1234567"
        }
        // check user in the db or not
        const existUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        });

        if(existUser){
            throw new Error("User  alreadyu exist db")
        }

        const signupUser = await fetch("http://localhost:3000/api/auth/sign-up/email" , {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(adminData)
        });

        console.log(signupUser);
        if(signupUser.ok){
          await prisma.user.update({
            where: {
                email : adminData.email
            },
            data: {
                emailVerified: true
            }
          })

          console.log("user updated");
        }


    } catch (error) {
        console.log(error);
    }
}

seedAdmin();