import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async(req :Request , res : Response) => {
  try {
    const user = req.user;
    if(!user){
      return res.status(400).json({
        success: false,
        message: "User is not found",
      });
    }
    const result = await postService.createPost(req.body , user.id as string);
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({
        error: "Post cretion failed",
        details: error
    })
  }
}


export const postControler = {
    createPost
}