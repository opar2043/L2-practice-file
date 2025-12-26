import { prisma } from "./lib/prisma";

async function run() {
  // ? create user 
    // const createUser = await prisma.user.create({
    //     data: {
    //         name : "Nayem islam",
    //         email : "nayem@gmail.com"
    //     }
    // })

//    console.log("Created User: " , createUser);

//   const createPost = await prisma.post.create({
//     data: {
//         title : "this is title",
//         content : "this is content",
//         authorId : 1
//     }
//   })




//   console.log("Created post" , createPost);

// ? get user
// const users = await prisma.user.findMany({
// });
// console.log(users);


// ? update user 
  // const updateUser = await prisma.user.update({
  //   where : {
  //     id : 1
  //   },
  //   data: {
  //     email : 'pranto@gmail.com',
  //     name: 'Pranto'
  //   }
  // })

  // console.log("Updated User: " , updateUser);

  // ? delete user 
  // const deleteUser = await prisma.user.delete({
  //   where : {
  //     id : 1
  //   }
  // })

  // console.log(deleteUser);
}

run();
