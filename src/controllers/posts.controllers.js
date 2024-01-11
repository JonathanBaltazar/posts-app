import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import { rm } from 'node:fs/promises'

export let getPosts = async (req, res) => {
    try {
        let posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message }).status(500);
    }
};
export let getPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);

        if (!post) {
            return res.json({ message: "Post not found" }).status(404);
        }
        res.json(post);
    } catch (error) {
        res.json({ message: error.message }).status(500);
    }
};
export let createPost = async (req, res) => {
    try {
        let post = {
            ...req.body,
            image: {
                public_id: "",
                url: "",
            },
        };

        if (req.files) {
            let filePath = req.files.image.tempFilePath;
            let result = await uploadImage(filePath);
            await rm(filePath);

            post.image.public_id = result.public_id;
            post.image.url = result.url;
        }

        let newPost = new Post(post);
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        res.json({ error: error }).status(500);
    }
};
export let updatePost = async (req, res) => {
    try {
        let postUpdated = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(postUpdated);
    } catch (error) {
        res.json({ message: error.message }).status(500);
    }
};
export let deletePost = async (req, res) => {
    try {
        let postDeleted = await Post.findByIdAndDelete(req.params.id);
        if (postDeleted) {

            if (postDeleted.image.public_id) {
                await deleteImage(postDeleted.image.public_id)
            }
            return res.json({ message: "Post deleted" });
        }
        return res.json({ message: "Post not found" }).status(404);
    } catch (error) {
        res.json({ message: error.message }).status(500);
    }
};
