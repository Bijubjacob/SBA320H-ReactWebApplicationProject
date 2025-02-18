import React from "react";
import Navigation from "./Navigation";
import './Navigation.css';


function Header() {
    return (
        <header className="header">
            <span className="Nav">
                AppName
            </span>
            < Navigation />
        </header>
    )
}

export default Header