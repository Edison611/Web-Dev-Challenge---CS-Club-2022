import React from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom'

/*
const links = [
    {
        name: "Teams",
        link: "/teams",
        id: "teams"
    },
    {
        name: "Guides",
        link: "/guides",
        id: "guides"
    },
    {
        name: "Socials",
        link: "/socials",
        id: "socials"
    }
]
*/
const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo"><Link to="./pages/Home">Santa's Time Tracker</Link></div>
            <ul className="nav_links">
                <li><Link to="/Add">Add</Link></li>
                <li><Link to="/Tasks">Tasks</Link></li>
                <li><Link to="/Socials">Socials</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;