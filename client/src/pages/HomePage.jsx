import { usePostsContext } from "../context/PostsContext";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { Fragment } from "react";
import { Toaster } from 'react-hot-toast'

function HomePage() {
    let { posts } = usePostsContext();

    const postsList = posts.map((post) => {
        return (
            <Fragment key={post._id}>
                <PostCard
                    title={post.title}
                    description={post.description}
                    post_id={post._id}
                />
            </Fragment>
        );
    });

    return (
        <>
            <Toaster />
            <div className="m-auto md:w-4/5 sm:w-11/12 p-4">
                <Link
                    to={"/new-post"}
                    className="hover:underline text-blue-300"
                >
                    Create post
                </Link>
                <h1>HomePage</h1>
                <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {postsList}
                </div>
            </div>
        </>
    );
}

export default HomePage;
