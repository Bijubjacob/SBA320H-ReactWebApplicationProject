import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



function Navigation() {
    const [showMenu, setshowMenu] = useState(false)
    let menu
    let menuMask

    if (showMenu) {
        menu =
            <div className="menu" >
                The menu
                <ul>
                    <li>
                        <Link to="/"
                            className="Home"
                            onClick={() => setshowMenu(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="About"
                            onClick={() => setshowMenu(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Pexels"
                            className="Pexels"
                            onClick={() => setshowMenu(false)}
                        >
                            Pexels Photo
                        </Link>
                    </li>
                </ul>
            </div>

        menuMask =
            <div className="menuMask"
                onClick={() => setshowMenu(false)}>

            </div>
    }



    return (
        <nav>
            <span className="FontAwesomeIcon">
                < FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setshowMenu(!showMenu)}
                />
            </span>

            {menuMask}

            {menu}


        </nav>
    )
}

export default Navigation;