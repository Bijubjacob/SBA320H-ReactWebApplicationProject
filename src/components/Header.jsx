import React from "react";
import Navigation from "./Navigation"; // Importing Navigation component
import './Navigation.css'; // Custom styles for the navigation

function Header() {
    return (
        <header className="header">
            <span className="Nav">
                <h1>SBA320H-ReactWebApplicationProject</h1></span> {/* AppName in the header */}
            <Navigation /> {/* Navigation bar */}
        </header>
    );
}

export default Header;
