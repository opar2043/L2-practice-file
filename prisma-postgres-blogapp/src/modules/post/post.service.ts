import { get } from "node:http";
import { Post, PostStatus } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { UserRole } from "../../middleware/verify";

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

const getAllPost = async (payload: {
  search: string | undefined;
  isFeatured: boolean;
  page: number;
  limit: number;
  skip: number;
  sortorder: String | undefined;
  sortBy: String | undefined;
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
            has: payload.search as string,
          },
        },
        //   {
        //    isFeatured: {
        //      i: payload.isFeatured as string
        //     },
        //   },
      ],
    },

    // orderBy:
    //   payload.sortBy && payload.sortOrder ? {
    //     [payload.sortBy]: payload.sortOrder as SortOrder
    //   } : {
    //     createdAt: "desc"
    //   }
  });
  return posts;
};

const getPostbyId = async (id: string) => {
  return prisma.$transaction(async (tx) => {
    // Increment view count
    await tx.post.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    // Fetch updated post
    return tx.post.findUnique({
      where: { id },
    });
  });
};

const getMyPost = async (authorId: string) => {
  // const userInfo = await prisma.user.findUniqueOrThrow({
  //   where: {
  //     id: authorId,
  //     status: "ACTIVE"
  //   },
  //   select: {
  //     id: true
  //   }
  // })

  const result = await prisma.post.findMany({
    where: {
      authorId,
    },
  });

  const total = await prisma.post.aggregate({
    _count: {
      id: true,
    },

    where: {
      authorId,
    },
  });

  return {
    data: result,
    total: total,
  };
};

const updatePost = async (
  postId: string,
  data: Partial<Post>,
  authorId: string
) => {
  const postData = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
    select: {
      authorId: true,
    },
  });

  if (postData.authorId !== authorId) {
    throw new Error("You are not authorized to update this post");
  }

  const result = await prisma.post.update({
    where: {
      id: postId,
    },
    data,
  });

  return result;
};

const deletePost = async (postId: string, authorId: string) => {
  const postData = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
    select: {
      authorId: true,
    },
  });

  return  await prisma.post.delete({
    where: {
      id: postId,
    },
  });
};


const getStat = async ()=>{
   return await prisma.$transaction(async (tx) => {
     const totalPosts = await tx.post.count();
      const totalViews = await tx.post.aggregate({
        _sum: {
          views: true
        }
      });

        const draftPosts = await tx.post.aggregate({
        where: {
          status: PostStatus.DRAFT
        }
      });

      const publishedPosts = await tx.post.aggregate({
        where: {
          status: PostStatus.PUBLISHED
        }
      });


      const users = await tx.post.aggregate({
        _count: {
          authorId: true
        }
      });
      
      const normalusers = await tx.post.aggregate({
        where: {
          role: UserRole.USER
        },
        _count: {
          authorId: true,
          
        }
      });



   })
}

export const postService = {
  createPost,
  getAllPost,
  getPostbyId,
  getMyPost,
  updatePost,
  deletePost,
  getStat
};
