import express, { Router } from "express";
import { postControler } from "./post.controller";

const router: Router = express.Router();

// get all posts
router.get("/", postControler.getAllPost);

// create post (NO AUTH)
router.post("/", postControler.createPost);

router.get ("/:id", postControler.getPostbyId);
export const postRouter = router;
