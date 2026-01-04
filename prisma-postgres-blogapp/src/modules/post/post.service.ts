import { line, string } from "better-auth/*";
import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { SortOrder } from "../../../generated/prisma/internal/prismaNamespace";

const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAt" | "authorId">,
  authorId: string
) => {
  const result = await prisma.post.create({
    data: {
      ...data,
      authorId,
    },
  });

  return result;
};

const getAllPost = async (payload: { search: string | undefined ,
   isFeatured: boolean ,
   page : number ,
   limit : number,
   skip : number,
   sortorder : String | undefined,
   sortBy : Strinh | undefined
  }) => {

  const posts = await prisma.post.findMany({
     skip: payload.skip,
    take: payload.limit, 

    where: {
      OR: [
        {
          title: {
            contains: payload.search as string,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: payload.search as string,
            mode: "insensitive",
          },
        },
        {
         tags: {
            has: payload.search as string
          },
        },
      //   {
      //    isFeatured: {
      //      i: payload.isFeatured as string
      //     },
      //   },
      ],
    },
    orderBy: {
      sortby: SortOrder
    }
  });
  return posts;
};

export const postService = {
  createPost,
  getAllPost,
};
