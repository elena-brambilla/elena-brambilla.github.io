import React, { useState, useEffect } from "react";
import LinkedIn from "../assets/icons/linkedin.png"
import Gmail from "../assets/icons/gmail.png"

function home() {

    const [isComputer, setIsComputer] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsComputer(window.innerWidth > 768);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const emailDestinatario = "brambilla.elena97@gmail.com"

    const linkComputer = `https://mail.google.com/?view=cm&fs=1&to=${encodeURIComponent(emailDestinatario)}`;
    const linkTelefono = "mailto:brambilla.elena97@gmail.com";

    return (
        <>
            <footer className="global-footer">
                <div className="icons-container">
                    <a href={isComputer ? linkComputer : linkTelefono} target={isComputer ? "_blank" : "_self"} rel="noopener noreferrer" className="social-link">
                        <img src={Gmail} alt="Gmail" className="gmail-icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/elena-brambilla-93141b44a/" target="_blank" rel="noreferrer" className="social-link">
                        <img src={LinkedIn} alt="profilo LinkedIn" className="linkedin-icon" />
                    </a>
                </div>
                <p>© 2026 Elena Brambilla. All rights reserved.</p>
            </footer>
        </>
    );
}

export default home;