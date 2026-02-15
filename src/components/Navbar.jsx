
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu on click
        }
    };

    return (
        <header className="header_section">
            <div className="nav-wrapper">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                        <img src="/images/logo/utm_whwh_logo.png" alt="UTM WHWH Logo" className="logo-img" style={{ height: '60px', width: 'auto' }} />
                        <span>UTM Women's Health & Wellness Hub</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#updates" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('updates'); }}>Updates</a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }}>Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="#resources" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('resources'); }}>Resources</a>
                            </li>
                            <li className="nav-item">
                                <a href="#joinus" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('joinus'); }}>Join Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
