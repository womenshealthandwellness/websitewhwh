import React from 'react';
import mapPinIcon from '../assets/icons/map-pin.png';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    {/* Left: Address */}
                    <div className="footer-col footer-left">
                        <img src={mapPinIcon} alt="Location" className="footer-icon-small" />
                        <span>3359 Mississauga Rd, Mississauga, ON</span>
                    </div>

                    {/* Center: Email */}
                    <div className="footer-col footer-center">
                        <a href="mailto:womenshealth@utmsu.ca">womenshealth@utmsu.ca</a>
                    </div>

                    {/* Right: Socials */}
                    <div className="footer-col footer-right">
                        <a href="https://www.linkedin.com/in/utmwhwh/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/contact/linkedin.png" alt="LinkedIn" className="footer-social-icon" />
                        </a>
                        <a href="https://www.instagram.com/utm.whwh/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/contact/instagram.png" alt="Instagram" className="footer-social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
