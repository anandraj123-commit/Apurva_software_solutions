import '../assets/scss/Blogs.scss';
import { Link } from 'react-router-dom';
import blogsArray from '../data/blogs.js';
const Blogs = function () {
  return (
    <>
      <div className="main-wrapper">
        <section class="blog-header">
          <div class="overlay"></div>
          <div class="content">
            <p class="subtitle">Our blog</p>
            <h1 class="title">Blog Articles</h1>
            <nav class="breadcrumb">
              <div class="center">
                <a href="/">Home</a> /
                <span>Our blog</span>
              </div>
            </nav>
          </div>
        </section>

        <section className="section blog-wrap bg-gray">
          <div className="container">
            <div className="row">
              {/* Blog Item 1 */}
              {blogsArray.map(blog => {
                 const dateStr = blog.createdAt
                 ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                     month: "short",
                     day: "numeric",
                     year: "numeric",
                 })
                 : "Recently posted";
                return (
                  <div className="col-lg-6 col-md-6 mb-5" key={blog.id}>
                    <div class="blog-card">
                      <div class="blog-image">
                        <img src={blog.src} alt="Blog post image"/>
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <span class="meta-item"><i class="icon">🖋️</i> {blog.type}</span>
                          <span class="meta-item"><i class="icon">💬</i> {Math.floor(Math.random() * (50 - 10 + 1)) + 10} Comments</span>
                          <span class="meta-item"><i class="icon">⏰</i> {dateStr}</span>
                        </div>
                        <h2 class="blog-title">{blog.title}</h2>
                        <p class="blog-excerpt">
                          {blog.excerpt}
                        </p>
                        <Link to={`/blog?id=${blog.id}&title=${encodeURIComponent(blog.title)}`} className='learn-more'>Learn More</Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
