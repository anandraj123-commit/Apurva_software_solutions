
import "../assets/scss/Blogs.scss";
import { Link } from "react-router-dom";
import blogsArray from "../data/blogs.js";
import { Helmet } from "react-helmet-async";


/*
=========================================================
CREATE SEO-FRIENDLY BLOG SLUG
=========================================================

Example:

Web-Mobile-App-Development-How-it-Boosts-Your-Business

becomes:

web-mobile-app-development-how-it-boosts-your-business
=========================================================
*/

const createSlug = (title = "") => {
  return title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};


const Blogs = () => {

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        {/* Title */}

        <title>
          Tech Blog | Web & Mobile Development Insights | Apurva Software Solutions
        </title>


        {/* Description */}

        <meta
          name="description"
          content="Explore our latest blogs on web development, mobile app development, UI/UX design, and software solutions. Stay updated with expert insights from Apurva Software Solutions."
        />


        {/* Keywords */}

        <meta
          name="keywords"
          content="tech blog, web development blogs, mobile app development articles, software development insights, UI UX blogs"
        />


        {/* Robots */}

        <meta
          name="robots"
          content="index, follow"
        />


        {/* Canonical */}

        <link
          rel="canonical"
          href="https://apurvasoftwaresolutions.com/blogs"
        />


        {/* =================================================
            OPEN GRAPH
        ================================================= */}

        <meta
          property="og:title"
          content="Tech Blog | Apurva Software Solutions"
        />

        <meta
          property="og:description"
          content="Read expert blogs on web, mobile, and software development trends and best practices."
        />

        <meta
          property="og:url"
          content="https://apurvasoftwaresolutions.com/blogs"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Apurva Software Solutions"
        />

        <meta
          property="og:image"
          content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
        />


        {/* =================================================
            TWITTER / X
        ================================================= */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

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


        {/* =================================================
            EXTRA SEO
        ================================================= */}

        <meta
          name="author"
          content="Apurva Software Solutions"
        />

        <meta
          name="language"
          content="English"
        />


        {/* Favicon */}

        <link
          rel="icon"
          href="/favicon.ico"
        />

      </Helmet>


      {/* =====================================================
          MAIN WRAPPER
      ===================================================== */}

      <div className="main-wrapper">


        {/* =================================================
            BLOG HEADER
        ================================================= */}

        <section className="blog-header">

          <div className="overlay"></div>


          <div className="content">

            <p className="subtitle">
              Our blog
            </p>


            <h1 className="title">
              Blog Articles
            </h1>


            <nav className="breadcrumb">

              <div className="center">

                <Link to="/">
                  Home
                </Link>

                {" / "}

                <span>
                  Our blog
                </span>

              </div>

            </nav>

          </div>

        </section>


        {/* =================================================
            BLOG LIST
        ================================================= */}

        <section className="section blog-wrap bg-gray w-full px-6">

          <div className="row">

            {blogsArray.map((blog) => {


              /*
              =================================================
              DATE
              =================================================
              */

              const dateStr = blog.createdAt
                ? new Date(
                  blog.createdAt
                ).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                )
                : "Recently posted";


              /*
              =================================================
              CREATE SEO URL
              =================================================
              */

              const blogSlug =
                createSlug(
                  blog.title
                );


              /*
              =================================================
              BLOG URL

              Example:

              /blog/web-mobile-app-development-how-it-boosts-your-business
              =================================================
              */

              const blogUrl =
                `/blog/${blogSlug}`;


              return (

                <div
                  className="col-lg-6 col-md-6 mb-5"
                  key={blog.id}
                >

                  <div className="blog-card">


                    {/* =================================================
                        BLOG IMAGE
                    ================================================= */}

                    <div className="blog-image">

                      <img
                        src={blog.src}
                        alt={blog.title}
                      />

                    </div>


                    {/* =================================================
                        BLOG CONTENT
                    ================================================= */}

                    <div className="blog-content">


                      {/* BLOG META */}

                      <div className="blog-meta">

                        <span className="meta-item">

                          <i className="icon">
                            🖋️
                          </i>

                          {" "}

                          {blog.type}

                        </span>


                        <span className="meta-item">

                          <i className="icon">
                            💬
                          </i>

                          {" "}

                          {blog.comments
                            ?.length || 0}{" "}
                          Comments

                        </span>


                        <span className="meta-item">

                          <i className="icon">
                            ⏰
                          </i>

                          {" "}

                          {dateStr}

                        </span>

                      </div>


                      {/* BLOG TITLE */}

                      <h2 className="blog-title">

                        {blog.title.replace(
                          /-/g,
                          " "
                        )}

                      </h2>


                      {/* BLOG EXCERPT */}

                      <p className="blog-excerpt">

                        {blog.excerpt}

                      </p>


                      {/* =================================================
                          SEO BLOG LINK
                      ================================================= */}

                      <Link
                        to={blogUrl}
                        className="learn-more"
                      >
                        Learn More
                      </Link>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        </section>

      </div>

    </>
  );
};


export default Blogs;

