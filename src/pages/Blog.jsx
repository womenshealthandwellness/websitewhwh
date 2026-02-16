
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
                    <h2>Latest from Our Blog</h2>
                    <p>Insights and resources for women's health and wellness</p>
                </div>

                {/* Featured Post Layout */}
                <div className="featured-blog-container">
                    {posts.map(post => (
                        <div key={post.id} className="featured-blog-card">
                            <div className="featured-blog-image">
                                <img src={post.image} alt={post.title} />
                                <div className="featured-blog-badge">Featured Post</div>
                            </div>
                            <div className="featured-blog-content">
                                <p className="featured-blog-date">{post.date}</p>
                                <h3 className="featured-blog-title">{post.title}</h3>
                                <p className="featured-blog-excerpt">{post.excerpt}</p>
                                <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn-custom">
                                    Read Full Article
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coming Soon Message */}
                <div className="blog-coming-soon">
                    <p>📝 More articles coming soon! Stay tuned for updates on women's health, wellness tips, and community resources.</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;
