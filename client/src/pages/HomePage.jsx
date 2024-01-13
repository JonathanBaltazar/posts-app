import { usePostsContext } from "../context/PostsContext";

function HomePage() {
    let { setPosts } = usePostsContext();

    return <div>HomePage</div>;
}

export default HomePage;
