import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from './About';
import Updates from './Updates';
import Blog from './Blog';
import Resources from './Resources';
import JoinUs from './JoinUs';



const slides = [
    {
        id: 1,
        image: '/images/team/team_1.jpg',
        title: "UTM Women's Health & Wellness Hub",
        description: "Empowering women at University of Toronto Mississauga by providing resources, support, and education."
    },
    {
        id: 2,
        image: '/images/team/team_2.jpg',
        title: "Join Our Community",
        description: "Be part of a safe and inclusive space for physical, mental, and emotional well-being."
    },
    {
        id: 3,
        image: '/images/team/team_3.jpg',
        title: "Events & Workshops",
        description: "Participate in our upcoming events and workshops designed for you."
    }
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="hero_area">
            {/* Home / Slider Section */}
            {/* Home / Slider Section */}
            <section className="slider_section" id="home">
                <div className="hero-row">
                    <div className="hero-text-col col-lg-6">
                        <div className="slider_content_box">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h1>
                                        {slides[currentSlide].title}
                                    </h1>
                                    <p>
                                        {slides[currentSlide].description}
                                    </p>
                                    <a href="#joinus" className="btn-custom">
                                        Contact Us
                                    </a>
                                </motion.div>
                            </AnimatePresence>


                        </div>
                    </div>

                    <div className="hero-img-col col-lg-6">
                        <div className="slider_image_container">
                            <AnimatePresence>
                                <motion.img
                                    key={currentSlide}
                                    src={slides[currentSlide].image}
                                    alt="Slider"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <div id="about">
                <About />
            </div>

            <div id="updates">
                <Updates />
            </div>

            <div id="blog">
                <Blog />
            </div>

            <div id="resources">
                <Resources />
            </div>

            <div id="joinus">
                <JoinUs />
            </div>
        </div>
    );
};

export default Home;
