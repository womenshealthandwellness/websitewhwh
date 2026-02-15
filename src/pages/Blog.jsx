
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "WHWH First Blog Post",
            date: "February 2025",
            excerpt: "Check out our latest insights and updates in our very first blog post.",
            image: "/images/blog/exam_stress.png",
            link: "/blog/WHWH_Blog_Post.pdf"
        }
    ];

    return (
        <section id="blog" className="section-padding bg-white">
            <div className="container-full">
                <div className="heading_container text-center mb-5">
                    <h2>Our Blog</h2>
                    <p>Latest news and articles from our team</p>
                </div>

                <div className="blog-grid" style={{ justifyContent: 'center', display: 'flex' }}>
                    {posts.map(post => (
                        <div key={post.id} className="blog-card-wrapper" style={{ maxWidth: '400px' }}>
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <div className="blog-content">
                                    <h5>{post.title}</h5>
                                    <p className="small text-muted mb-3">{post.date}</p>
                                    <p>{post.excerpt}</p>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn-custom" style={{ padding: '10px 25px', fontSize: '0.9rem' }}>Read PDF</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
