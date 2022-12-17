import React from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo"><Link to="/Home">Santa's Time Tracker - Begin Here</Link></div>
            <ul className="nav_links">
                <li><Link to="/Add">Add</Link></li>
                <li><Link to="/Tasks">Tasks</Link></li>
                <li><Link to="/Socials">Socials</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;