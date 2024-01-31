import React from "react";
import { usePostsContext } from "../context/PostsContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Card({ title, description, post_id }) {
    let { deletePost } = usePostsContext();

    let handleDelete = () => {
        toast(
            (t) => (
                <div>
                    <p>Do you want to delete it?</p>
                    <div className="flex justify-between mt-2">
                        <button
                            className="py-2 px-4 rounded-md bg-green-600 text-white"
                            onClick={() => {
                                deletePost(post_id);
                                toast.dismiss(t.id);
                            }}
                        >
                            Delete
                        </button>

                        <button
                            className="py-2 px-4 rounded-md bg-red-500 text-white"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ),
            {
                duration: 15000,
            }
        );
    };

    return (
        <div className="h-72 shadow-lg hover:shadow-2xl rounded-lg">
            {title}
            {description}
            <button onClick={handleDelete} className="bg-red-500 text-white">
                Delete post
            </button>
            <Link to={`/edit-post/${post_id}`}>Edit post</Link>
        </div>
    );
}

export default Card;
