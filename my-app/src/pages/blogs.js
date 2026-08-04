import '../assets/scss/Blogs.scss';
import { Link } from 'react-router-dom';
import blogsArray from '../data/blogs.js';
import { Helmet } from 'react-helmet-async';
const Blogs = function () {
  return (
    <>
    <Helmet>
  {/* ✅ Title */}
  <title>Tech Blog | Web & Mobile Development Insights | Apurva Software Solutions</title>

  {/* ✅ Meta Description */}
  <meta
    name="description"
    content="Explore our latest blogs on web development, mobile app development, UI/UX design, and software solutions. Stay updated with expert insights from Apurva Software Solutions."
  />

  {/* ✅ Keywords (optional but fine) */}
  <meta
    name="keywords"
    content="tech blog, web development blogs, mobile app development articles, software development insights, UI UX blogs"
  />

  <meta name="robots" content="index, follow" />

  {/* ✅ Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/blogs"
  />

  {/* ✅ Open Graph (Facebook / LinkedIn) */}
  <meta property="og:title" content="Tech Blog | Apurva Software Solutions" />

  <meta
    property="og:description"
    content="Read expert blogs on web, mobile, and software development trends and best practices."
  />

  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/blogs"
  />

  <meta property="og:type" content="website" />

  <meta property="og:site_name" content="Apurva Software Solutions" />

  <meta
    property="og:image"
    content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
  />

  {/* ✅ Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Tech Blog | Apurva Software Solutions"
  />

  <meta
    name="twitter:description"
    content="Stay updated with the latest in web and mobile development."
  />

  <meta
    name="twitter:image"
    content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
  />

  <meta
    name="twitter:url"
    content="https://apurvasoftwaresolutions.com/blogs"
  />

  {/* Extra */}
  <meta name="author" content="Apurva Software Solutions" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Helmet>


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

        <section className="section blog-wrap bg-gray w-full px-6">
          
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
         
        </section>
      </div>
    </>
  );
};

export default Blogs;
