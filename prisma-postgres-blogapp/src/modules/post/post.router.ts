//? router => controller => service

import express, { Router } from "express";
import { postControler } from "./post.controller";
const router = express.Router();

router.post("/" ,
     postControler.createPost
);

export const postRouter : Router = router;