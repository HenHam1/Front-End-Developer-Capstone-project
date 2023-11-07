/*import React, { useSate } from "react";*/
import React from 'react';
import logo from '../images/Logo .svg';

const Nav = () => {
    /*const [menuOpen, setMenuOpen] = useSate(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }*/

    return (
        <nav /*cLassName={`navbar ${menuOpen ? "open" : ""}`}-*/>
            <a href='/' /*cLassName="logo"*/>
                <img src={logo} alt='logo'/>
            </a>

            {/* mobile navbar */}
            <div /*cLassName="menu-icon" onCLick={toggleMenu}*/>
                <div cLassName='bar'></div>
                <div cLassName='bar'></div>
                <div cLassName='bar'></div>
            </div>
            {/* nav items */}
            <ul /*cLassName={`nav-links ${menuOpen ? "visible" : ""}`}*/>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

