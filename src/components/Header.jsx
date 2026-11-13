import React, { useState } from "react";
import Button from "./ui/Button";
import ThemeToggle from "./ui/ThemeToggle";
import { Link } from "react-router";
import cv from "../assets/cv.pdf"
import OpenTabButton from './ui/OpenTabButton.jsx'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="global-navbar">
                <div className="navbar-logo"><Link to="/">[Il Tuo Nome]</Link></div>

                <button
                    className={`menu-toggle-icon ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Apri menu navigazione"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className={`navigation-buttons ${isOpen ? "mobile-open" : ""}`}>                  
                    <Button text="About" to="/about-me" className="btn-primary" />
                    <Button text="I miei Progetti" to="/my-projects" className="btn-primary" />
                    <OpenTabButton text="Scarica il mio CV" link="/cv.pdf" downloadName="Elena_Brambilla_CV_UX_Designer.pdf" newTab={true} />
                    <ThemeToggle />
                </div>
            </nav>
        </>
    );
}

export default Header;