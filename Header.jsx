import React from "react";
import { Link, Outlet } from "react-router-dom";


function Header() {
    return (
        <div>
            <nav>
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
                <a href="/signup">Signup</a>

                <Link to={"taskComponent"}>Go to Body</Link>
                <Outlet />
            </nav>
        </div>
    );
}

export default Header;