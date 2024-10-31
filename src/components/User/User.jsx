import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({user}) => {
    const{id, name, email, phone} = user;
    return (
        <div className="p-5 border rounded-xl bg-orange-200 space-y-2">
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Show Datiles</Link>
            <Link to={`/user/${id}`}>
            <button className="bg-red-300 my-4 py-1 px-3 rounded-md mx-2">Click</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}
export default User;