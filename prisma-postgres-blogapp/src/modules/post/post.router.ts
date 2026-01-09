import express, { Router } from "express";
import { postControler } from "./post.controller";

const router: Router = express.Router();

// get all posts
router.get("/", postControler.getAllPost);
router.get("/stats", postControler.getStat);   // admin will access this route
router.get("/my-posts", postControler.getMyPost);

// create post (NO AUTH)
router.post("/", postControler.createPost);

router.get ("/:id", postControler.getPostbyId);
router.patch ("/:postId", postControler.updatePost);
router.delete ("/:postId", postControler.deletePost);
export const postRouter = router;
