import { createContext, useState, useContext, useEffect } from "react";
import {
    getPostsRequest,
    getPostRequest,
    createPostRequest,
    editPostRequest,
    deletePostRequest,
} from "../api/posts";
import toast from "react-hot-toast";

const PostsContext = createContext(null);

export const usePostsContext = () => {
    return useContext(PostsContext);
};

function PostsProvider({ children }) {
    const [posts, setPosts] = useState([]);

    // GET ALL POSTS
    let getPosts = () => {
        getPostsRequest()
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    };

    // GET ONE POST
    let getPost = (id) => {
        return getPostRequest(id);
    }

    // CREATE POST
    let createPost = (post) => {
        return createPostRequest(post);
    };

    // EDIT POST
    let editPost = (id, post) => {
        /*
        editPostRequest(id, post)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Post edited successfully");
                    return setPosts(posts.map((post) => (post._id === id ? res.data : post)));
                }
            })
            .catch((err) => console.log(err));
            */
    };

    // DELETE POST
    let deletePost = (id) => {
        deletePostRequest(id)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Post deleted successfully");
                    return setPosts(posts.filter((post) => post._id !== id));
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <PostsContext.Provider
            value={{
                posts,
                getPosts,
                getPost,
                editPost,
                setPosts,
                createPost,
                deletePost,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
}

export default PostsProvider;
