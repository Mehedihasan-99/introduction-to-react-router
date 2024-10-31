import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body} = post;
    const navigate = useNavigate();
    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    };
    return (
        <div className=" border-2 border-red-400 rounded-lg">
            <h3>Post details id: {id}</h3>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>Post details</Link>
            <button className="btn" onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;