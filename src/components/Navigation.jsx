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
            <ul>
                <li>
                    <Link to="/" className='Home'>Home</Link>
                </li>
                <li>
                    <Link to="/About" className='About'>About</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation;