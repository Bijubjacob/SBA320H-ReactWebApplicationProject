import React from "react";
import Navigation from "./Navigation"; // Importing Navigation component
import './Navigation.css'; // Custom styles for the navigation

function Header() {
    return (
        <header className="header">
            <span className="Nav">AppName</span> {/* AppName in the header */}
            <Navigation /> {/* Navigation bar */}
        </header>
    );
}

export default Header;
