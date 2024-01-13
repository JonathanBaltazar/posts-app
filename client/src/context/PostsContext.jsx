import { createContext, useState, useContext, useEffect } from "react";
import { getPosts } from '../api/posts'

const PostsContext = createContext(null);

export const usePostsContext = () => {
    return useContext(PostsContext);
}

function PostsProvider({ children }) {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
      
        let res = await getPosts()
        console.log(res)
    }, [posts])
    

    return (
        <PostsContext.Provider
            value={{
                posts,
                setPosts,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
}

export default PostsProvider;
