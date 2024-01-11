import { Router } from "express";
import {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} from "../controllers/posts.controllers.js";

const router = Router();

// GET POSTS
router.get("/", getPosts);

// GET POST
router.get("/:id", getPost);

// CREATE POST
router.post("/", createPost);

// UPDATE POST
router.put("/:id", updatePost);

// DELETE POST
router.delete("/:id", deletePost);

export default router;
