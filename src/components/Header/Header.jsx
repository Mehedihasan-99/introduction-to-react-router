import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2 className="text-4xl">Header</h2>
            <nav className="space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;