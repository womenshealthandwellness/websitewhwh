
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="fs-section p-0">
            <div className="about-split-container">
                <div className="about-img-col">
                    <img src="/images/about_us.jpg" alt="WHWH Team - Ask the Nurse" className="about-img-full" />
                </div>
                <div className="about-text-col">
                    <div className="detail-box">
                        <h2>About Us</h2>
                        <p>
                            The UTM Women's Health & Wellness Hub is dedicated to creating a supportive environment for women on campus.
                            We provide resources, organize educational workshops, and foster a community where every woman feels empowered
                            to prioritize her health.
                        </p>
                        <p>
                            Our mission is to bridge the gap in women's health education and accessibility, ensuring that everyone
                            has the tools they need to thrive physically, mentally, and emotionally.
                        </p>
                        <a href="#joinus" className="btn-custom mt-4">
                            Join Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
