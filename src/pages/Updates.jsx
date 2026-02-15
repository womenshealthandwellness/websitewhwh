import React, { useEffect } from 'react';
import './Updates.css';

const Updates = () => {
    useEffect(() => {
        // Load Instagram embed script
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            const script = document.createElement('script');
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section className="bg-warm" id="updates-content" style={{ padding: '60px 0' }}>
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Updates</h2>
                    <p>Follow us on Instagram @UTM.WHWH</p>
                </div>

                <div className="instagram-grid">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/p/DURzqu_EVHv/?utm_source=ig_embed&utm_campaign=loading"
                        data-instgrm-version="14"
                    >
                        <a href="https://www.instagram.com/p/DURzqu_EVHv/?utm_source=ig_embed&utm_campaign=loading" target="_blank" rel="noopener noreferrer">
                            View this post on Instagram
                        </a>
                    </blockquote>

                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/p/DUbR-Y0kf03/?utm_source=ig_embed&utm_campaign=loading"
                        data-instgrm-version="14"
                    >
                        <a href="https://www.instagram.com/p/DUbR-Y0kf03/?utm_source=ig_embed&utm_campaign=loading" target="_blank" rel="noopener noreferrer">
                            View this post on Instagram
                        </a>
                    </blockquote>

                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/p/DUq9Cl2D6Kt/?utm_source=ig_embed&utm_campaign=loading"
                        data-instgrm-version="14"
                    >
                        <a href="https://www.instagram.com/p/DUq9Cl2D6Kt/?utm_source=ig_embed&utm_campaign=loading" target="_blank" rel="noopener noreferrer">
                            View this post on Instagram
                        </a>
                    </blockquote>
                </div>

                <div className="btn-box" style={{ marginTop: '40px', textAlign: 'center' }}>
                    <a href="https://www.instagram.com/utm.whwh/" className="btn-custom" target="_blank" rel="noopener noreferrer">
                        Visit our Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Updates;
