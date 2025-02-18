import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome for icons
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Hamburger icon
import { Link } from "react-router-dom"; // For navigation links

function Navigation() {
    const [showMenu, setshowMenu] = useState(false); // state to control the menu visibility
    let menu;
    let menuMask;

    if (showMenu) {
        const menuItems = [
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/pexels/:id', label: 'Pexels Photo' }
        ];

        menu = (
            <div className="menu">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            {/* Check if the path contains :id */}
                            <Link
                                to={item.path === '/pexels/:id' ? `/pexels/1` : item.path}
                                className={item.label}
                                onClick={() => setshowMenu(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        );

        menuMask = (
            <div className="menuMask" onClick={() => setshowMenu(false)}></div>
        );
    }

    return (
        <nav>
            <span className="FontAwesomeIcon">
                <FontAwesomeIcon icon={faBars} onClick={() => setshowMenu(!showMenu)} />
            </span>

            {menuMask}
            {menu}
        </nav>
    );
}

export default Navigation;
