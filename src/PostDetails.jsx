import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate();

    const handleGoBack = () => {
        // navigate(-1);
        navigate(`/posts`)
    };
    return (
        <div>
            <h2> Post Id : {post.id}</h2>
            <p>{post.title}</p>
            <p><small>{post.body}</small></p>
            <button onClick={handleGoBack} className="btn"> Back</button>
        </div>
    );
};

export default PostDetails;