import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="#"><i className="fas fa-bars"></i>Browse</Link></li>
                <li><Link to="#"><i className="fas fa-plus"></i>Add new questions</Link></li>
                <li><Link to="#"><i className="fas fa-cogs"></i>Api</Link></li>
                <li><Link to="#"><i className="fas fa-comments"></i>Discuss</Link></li>
                <li><Link to="#"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;