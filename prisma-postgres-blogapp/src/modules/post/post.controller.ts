import { Request, Response } from "express";
import { postService } from "./post.service";
import paginationsorting from "../../helper/paginationsorting";
import { string } from "better-auth/*";

const createPost = async (req: Request, res: Response) => {
  try {
    const { authorId, title , content } = req.body;

    if (!authorId) {
      return res.status(400).json({
        success: false,
        message: "authorId is required",
      });
    }

    const result = await postService.createPost({ title , content }, authorId);

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
    const { search } = req.query;
    const searchString = typeof search === "string" ? search : undefined;
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured == "true"
      : false;
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 10);
    const skip = (page - 1) * limit;
    const sortBy = req.query.sortBy;
    const sortorder = req.query.sortorder;

    const options = paginationsorting(req.body);
    console.log(options);

    const result = await postService.getAllPost({
      search: searchString,
      isFeatured,
      page,
      limit,
      skip,
    });
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

const getPostbyId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await postService.getPostbyId(id as string);

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

const getMyPost = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    if (!user?.id) {
      throw new Error("User ID not found in request body");
    }
    const result = await postService.getMyPost(user.id as string);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Post Fetched failed",
      error,
    });
  }
};
const updatePost = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    if (!user?.id) {
      throw new Error("User ID not found in request body");
    }
    const { postId } = req.params;
    const result = await postService.updatePost(postId as string, req.body, user.id as string);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Post update failed",
      error,
    });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    if (!user?.id) {
      throw new Error("User ID not found in request body");
    }
    const { postId } = req.params;
    const result = await postService.deletePost(postId as string, user.id as string);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Post delete failed",
      error,
    });
  }
};


const getStat = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const { postId } = req.params;
    const result = await postService.getStat();

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Post stat loading failed",
      error,
    });
  }
};

export const postControler = {
  createPost,
  getAllPost,
  getPostbyId,
  getMyPost,
  updatePost,
  deletePost,
  getStat
};
