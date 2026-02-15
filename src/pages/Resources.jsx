import React, { useState } from 'react';

const Resources = () => {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (id) => {
        setOpenCard(openCard === id ? null : id);
    };

    const resourcesData = [
        {
            id: 'apps',
            title: 'Health & Wellness Apps',
            description: 'Discover apps designed to help you manage your menstrual cycle, fitness, and overall well-being.',
            image: '/images/resources/apps_icon.png',
            links: [
                { label: 'Clue - Period & Cycle Tracker', url: 'https://www.helloclue.com/' },
                { label: 'Headspace - Meditation & Sleep', url: 'https://www.headspace.com/' },
                { label: 'Sweat - Fitness for Women', url: 'https://www.sweat.com/' }
            ]
        },
        {
            id: 'youtube',
            title: 'Informative Videos',
            description: 'Watch expert talks and videos that provide valuable insights into women\'s health.',
            image: '/images/resources/youtube_icon.png',
            links: [
                { label: 'WomensHealthgov Channel', url: 'https://www.youtube.com/@WomensHealthgov' },
                { label: 'Women\'s Health UK Channel', url: 'https://www.youtube.com/@WomensHealthUKYT' }
            ]
        },
        {
            id: 'community',
            title: 'Social & Community',
            description: 'Connect with certified advisors and inclusive support groups on social media.',
            image: '/images/resources/instagram_icon.png',
            links: [
                { label: '@Pcoshut - PCOS Nutrition', url: 'https://www.instagram.com/pcoshut/' },
                { label: '@Shorecentrewr - Sexual Health', url: 'https://www.instagram.com/shorecentrewr/' }
            ]
        },
        {
            id: 'university',
            title: 'University (UTM) Support',
            description: 'Access on-campus health, counselling, and safety resources available to students.',
            image: '/images/resources/uoft_icon.png',
            links: [
                { label: 'Health & Counselling Centre', url: 'https://www.utm.utoronto.ca/health/' },
                { label: 'Accessibility Services', url: 'https://www.utm.utoronto.ca/accessibility/' },
                { label: 'Telus Health Student Support', url: 'https://mentalhealth.utoronto.ca/telus-health-student-support/' },
                { label: 'Sexual Violence Prevention Centre', url: 'https://www.svpscentre.utoronto.ca/' },
                { label: 'Campus Safety', url: 'https://www.utm.utoronto.ca/campus-safety/' }
            ]
        },
        {
            id: 'utmsu',
            title: 'UTMSU Services',
            description: 'Student Union resources including the Food Centre and other support services.',
            image: '/images/resources/utmsu_icon.png',
            links: [
                { label: 'UTMSU Food Centre', url: 'https://utmsu.ca/service/food-centre/' }
            ]
        },
        {
            id: 'general',
            title: 'General Community Support',
            description: 'Broader mental health and crisis support services for the Greater Toronto Area.',
            image: '/images/resources/community_resources.png',
            links: [
                { label: 'GTA Mental Health (211)', url: 'https://211central.ca/' },
                { label: 'Hope for Wellness Helpline', url: 'https://www.hopeforwellness.ca/' },
                { label: 'ONTX Crisis Services', url: 'https://www.dcontario.org/ontx.html' }
            ]
        }
    ];

    return (
        <section id="resources" className="section-padding bg-warm">
            <div className="container-full">
                <div className="heading_container text-center mb-5">
                    <h2>Resources</h2>
                    <p>Explore our curated list of health, wellness, and support resources.</p>
                </div>

                <div className="resource-grid-cards">
                    {resourcesData.map((res) => (
                        <div key={res.id} className="resource-card">
                            <div className="resource-card-img-wrapper">
                                <img src={res.image} alt={res.title} className="resource-card-img-top" />
                            </div>
                            <div className="resource-card-body">
                                <h3 className="resource-card-title">{res.title}</h3>
                                <p className="resource-card-text">{res.description}</p>

                                <button
                                    className={`btn-custom ${openCard === res.id ? 'active' : ''}`}
                                    onClick={() => toggleCard(res.id)}
                                    style={{ width: '100%', borderRadius: '15px' }}
                                >
                                    {openCard === res.id ? 'Hide Resources' : 'View Resources'}
                                </button>

                                <div className={`resource-links-container ${openCard === res.id ? 'show' : ''}`}>
                                    {res.links.map((link, index) => (
                                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="resource-link-item">
                                            {link.label}
                                            <span>&rarr;</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
