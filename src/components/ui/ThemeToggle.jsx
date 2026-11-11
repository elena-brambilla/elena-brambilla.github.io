import React, { useState, useEffect } from "react";

function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) return savedTheme;
        
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="custom-toggle-wrapper">
            <span className={`toggle-icon sun-icon ${theme === "light" ? "active" : ""}`}>☀️</span>
            <button 
                className={`compact-theme-switch ${theme}`} 
                onClick={toggleTheme}
                aria-label="Cambia tema visivo"
            >
                <div className="switch-handle"></div>
            </button>
            <span className={`toggle-icon moon-icon ${theme === "dark" ? "active" : ""}`}>🌙</span>
        </div>
    );
}

export default ThemeToggle;