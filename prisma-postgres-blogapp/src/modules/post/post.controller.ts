import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const { authorId, title, content } = req.body;

    if (!authorId) {
      return res.status(400).json({
        success: false,
        message: "authorId is required",
      });
    }

    const result = await postService.createPost(
      { title, content },
      authorId
    );

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Post creation failed",
      error,
    });
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const {search} = req.query;
    const searchString = typeof search=== 'string' ? search : undefined;
    const isFeatured = req.query.isFeatured ? req.query.isFeatured == 'true' : false;

    const result = await postService.getAllPost({search : searchString , isFeatured});
    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch posts",
      error,
    });
  }
};

export const postControler = {
  createPost,
  getAllPost,
};
