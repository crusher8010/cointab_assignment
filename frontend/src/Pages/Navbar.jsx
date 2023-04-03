import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="mainNav">
            <div className="navDiv">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>

    )
}

export default Navbar;