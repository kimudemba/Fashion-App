import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Welcome to Fashion App</h1>
            <ul classname="nav-links">
                <li>Home</li>
                <li>Explore</li>
                <li>My Closet</li>
                <li>Sign In</li>
                </ul>
        </nav>
    );
};

export default Navbar;