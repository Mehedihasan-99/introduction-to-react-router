import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="bg-green-200">
            <h2>hello posts {posts.length}</h2>
            <div className="grid grid-cols-3 border  gap-5">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;