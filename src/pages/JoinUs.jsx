
import React, { useState } from 'react';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;
        const subject = `New Message from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
        window.location.href = `mailto:womenshealth@utmsu.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div id="joinus">
            <div className="contact-split-hero">
                <div className="contact-form-col">
                    <div className="heading_container">
                        <h2>Join Us</h2>
                        <p className="mb-4">We'd love to hear from you. Send us a message!</p>
                        <a href="https://sop.utoronto.ca/group/utm-womens-health-wellness-hub-utm-whwh/" target="_blank" rel="noopener noreferrer" className="btn-custom" style={{ padding: '8px 20px', fontSize: '0.9rem', display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid white', color: 'white', marginBottom: '20px' }}>
                            View SOP Group Page
                        </a>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="form-input"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="btn-custom bg-white text-pink border-white mt-3" style={{ width: '100%' }}>
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                <div className="contact-map-col">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.916895356956!2d-79.6644026845057!3d43.54575997912519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b43bbf2b6b0b5%3A0xe2851174624466b0!2sUniversity%20of%20Toronto%20Mississauga!5e0!3m2!1sen!2sca!4v1675276527582!5m2!1sen!2sca"
                        style={{ border: 0, width: '100%', height: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
