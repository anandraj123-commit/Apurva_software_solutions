
import "../assets/scss/Blog.scss";
import "../assets/scss/common.scss";

import { useEffect } from "react";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { blogActions } from "../store/index";
import { getcommentsData } from "../store/blog-slice";

import blogsArray from "../data/blogs";

import CommentForm from "../components/comment";
import BlogSharePage from "../components/SharePage";

import { Helmet } from "react-helmet-async";


/*
=========================================================
CREATE SEO-FRIENDLY SLUG
=========================================================

Example:

Mobile-App-Development-Solutions-for-Modern-Businesses

becomes:

mobile-app-development-solutions-for-modern-businesses
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


/*
=========================================================
BLOG COMPONENT
=========================================================
*/

const Blog = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();


  /*
  =========================================================
  GET NEW SEO URL PARAMETER

  Example:

  /blog/mobile-app-development-solutions
  =========================================================
  */

  const { slug } = useParams();


  /*
  =========================================================
  GET OLD URL PARAMETERS

  Example:

  /blog?id=2&title=...
  =========================================================
  */

  const [searchParams] = useSearchParams();

  const oldId = searchParams.get("id");


  /*
  =========================================================
  FIND BLOG FROM blogsArray

  We support BOTH:

  1. /blog/:slug

  2. /blog?id=2
  =========================================================
  */

  const selectedBlog = blogsArray.find((item) => {

    /*
    NEW SEO URL
    */

    if (slug) {
      return createSlug(item.title) === slug;
    }


    /*
    OLD URL
    */

    if (oldId) {
      return String(item.id) === String(oldId);
    }


    return false;
  });


  /*
  =========================================================
  BLOG ID
  =========================================================
  */

  const blogId = selectedBlog?.id;


  /*
  =========================================================
  REDIRECT OLD URL TO NEW SEO URL

  OLD:

  /blog?id=2&title=Web-Mobile-App-Development-How-it-Boosts-Your-Business

  NEW:

  /blog/web-mobile-app-development-how-it-boosts-your-business
  =========================================================
  */

  useEffect(() => {

    if (oldId && selectedBlog) {

      const newSlug = createSlug(
        selectedBlog.title
      );

      navigate(
        `/blog/${newSlug}`,
        {
          replace: true,
        }
      );
    }

  }, [
    oldId,
    selectedBlog,
    navigate,
  ]);


  /*
  =========================================================
  LOAD BLOG DATA INTO REDUX

  We still use your existing Redux logic for:

  - blog details
  - latest posts
  - comments
  =========================================================
  */

  useEffect(() => {

    if (!blogId) {
      return;
    }

    dispatch(
      blogActions.filterBlog(blogId)
    );

    dispatch(
      blogActions.latestPosts()
    );

    dispatch(
      getcommentsData(blogId)
    );

  }, [
    dispatch,
    blogId,
  ]);


  /*
  =========================================================
  GET BLOG FROM REDUX
  =========================================================
  */

  const blog = useSelector(
    (state) => state.blog
  );


  /*
  =========================================================
  COMMENTS
  =========================================================
  */

  const comments =
    blog?.comments || [];


  /*
  =========================================================
  KEYWORDS
  =========================================================
  */

  const keywords =
    blog?.keywords || [];


  /*
  =========================================================
  LATEST POSTS
  =========================================================
  */

  const latestPosts =
    useSelector(
      (state) =>
        state.blog?.latestPosts || []
    );


  /*
  =========================================================
  BLOG NOT FOUND

  This only happens when:

  /blog/invalid-slug

  OR

  /blog?id=999
  =========================================================
  */

  if (!selectedBlog) {

    return (
      <>
        <Helmet>

          <title>
            Blog Not Found | Apurva Software Solutions
          </title>

          <meta
            name="robots"
            content="noindex, follow"
          />

        </Helmet>


        <div
          className="container"
          style={{
            padding: "100px 20px",
            textAlign: "center",
          }}
        >

          <h1>
            Blog Not Found
          </h1>

          <p>
            Sorry, the blog article you are
            looking for does not exist.
          </p>


          <button
            onClick={() =>
              navigate("/blogs")
            }
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Back to Blogs
          </button>

        </div>
      </>
    );
  }


  /*
  =========================================================
  OLD URL REDIRECT SCREEN

  Prevents old page from briefly rendering.
  =========================================================
  */

  if (oldId) {

    return (
      <div
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        Redirecting...
      </div>
    );
  }


  /*
  =========================================================
  WAIT FOR REDUX BLOG DATA
  =========================================================
  */

  if (
    !blog ||
    !blog.title
  ) {

    return (
      <div
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  }


  /*
  =========================================================
  CREATE SLUG
  =========================================================
  */

  const blogSlug =
    createSlug(blog.title);


  /*
  =========================================================
  CANONICAL URL
  =========================================================
  */

  const canonicalUrl =
    `https://apurvasoftwaresolutions.com/blog/${blogSlug}`;


  /*
  =========================================================
  CLEAN DESCRIPTION

  Removes HTML tags from:

  shortDescription
  shortDesciption
  excerpt
  =========================================================
  */

  const cleanDescription = (
    blog.shortDescription ||
    blog.shortDesciption ||
    blog.excerpt ||
    ""
  )
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();


  /*
  =========================================================
  META DESCRIPTION
  =========================================================
  */

  const metaDescription =
    cleanDescription.substring(
      0,
      160
    );


  /*
  =========================================================
  BLOG IMAGE

  IMPORTANT:

  Do NOT use:

  https://domain.com[image](image)

  Correct:

  https://domain.com/image
  =========================================================
  */

  const blogImage = blog.src
    ? blog.src.startsWith("http")
      ? blog.src
      : `https://apurvasoftwaresolutions.com${blog.src}`
    : "https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png";


  /*
  =========================================================
  READABLE TITLE

  Your data contains:

  Web-Mobile-App-Development-How-it-Boosts-Your-Business

  Display:

  Web Mobile App Development How it Boosts Your Business
  =========================================================
  */

  const readableTitle =
    blog.title.replace(
      /-/g,
      " "
    );


  /*
  =========================================================
  PAGE TITLE
  =========================================================
  */

  const pageTitle =
    `${readableTitle} | Apurva Software Solutions`;


  /*
  =========================================================
  PREVIOUS / NEXT BLOG
  =========================================================
  */

  const currentIndex =
    blogsArray.findIndex(
      (item) =>
        item.id === blogId
    );


  const prevBlog =
    currentIndex > 0
      ? blogsArray[
      currentIndex - 1
      ]
      : null;


  const nextBlog =
    currentIndex !== -1 &&
      currentIndex <
      blogsArray.length - 1
      ? blogsArray[
      currentIndex + 1
      ]
      : null;


  /*
  =========================================================
  NAVIGATE TO BLOG

  ALL INTERNAL BLOG LINKS NOW USE SEO URLS
  =========================================================
  */

  const navigateToBlog = (
    blogItem
  ) => {

    if (!blogItem) {
      return;
    }

    const newSlug =
      createSlug(
        blogItem.title
      );

    navigate(
      `/blog/${newSlug}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /*
  =========================================================
  PAGE
  =========================================================
  */

  return (
    <>
      <Helmet>

        {/* =================================================
            TITLE
        ================================================= */}

        <title>
          {pageTitle}
        </title>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <meta
          name="description"
          content={metaDescription}
        />


        {/* =================================================
            KEYWORDS
        ================================================= */}

        <meta
          name="keywords"
          content={
            Array.isArray(keywords)
              ? keywords.join(", ")
              : ""
          }
        />


        {/* =================================================
            ROBOTS
        ================================================= */}

        <meta
          name="robots"
          content="index, follow"
        />


        {/* =================================================
            AUTHOR
        ================================================= */}

        <meta
          name="author"
          content={
            blog.creator?.name ||
            "Apurva Software Solutions"
          }
        />


        {/* =================================================
            CANONICAL
        ================================================= */}

        <link
          rel="canonical"
          href={canonicalUrl}
        />


        {/* =================================================
            OPEN GRAPH
        ================================================= */}

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={metaDescription}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:site_name"
          content="Apurva Software Solutions"
        />

        <meta
          property="og:image"
          content={blogImage}
        />

        <meta
          property="og:image:alt"
          content={readableTitle}
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
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={metaDescription}
        />

        <meta
          name="twitter:image"
          content={blogImage}
        />

        <meta
          name="twitter:image:alt"
          content={readableTitle}
        />

        <meta
          name="twitter:url"
          content={canonicalUrl}
        />


        {/* =================================================
            FAVICON
        ================================================= */}

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
              Blog Details
            </p>


            <h1 className="title">
              {readableTitle}
            </h1>


            <nav className="breadcrumb">

              <div className="center">

                <a href="/">
                  Home
                </a>

                {" / "}

                <span>
                  Blog Details
                </span>

              </div>

            </nav>

          </div>

        </section>


        {/* =================================================
            BLOG CONTENT
        ================================================= */}

        <section>

          <div className="container">

            <div className="row">


              {/* =================================================
                  MAIN CONTENT
              ================================================= */}

              <div className="col-lg-8">

                <div className="col-lg-12">


                  {/* =================================================
                      BLOG CARD
                  ================================================= */}

                  <div className="blog-card">


                    {/* BLOG IMAGE */}

                    <div className="blog-card-image">

                      <img
                        src={blog.src}
                        alt={readableTitle}
                      />

                    </div>


                    {/* BLOG BODY */}

                    <div className="blog-card-body">


                      {/* BLOG META */}

                      <div className="blog-meta">

                        <span className="meta-item">
                          🖋️ {blog.type}
                        </span>


                        <span className="meta-item">
                          💬 {comments.length}
                        </span>


                        <span className="meta-item">
                          ⏰{" "}
                          {blog.createdAt
                            ? new Date(
                              blog.createdAt
                            ).toLocaleDateString(
                              "en-US"
                            )
                            : ""}
                        </span>

                      </div>


                      {/* TITLE */}

                      <h2 className="blog-title">
                        {readableTitle}
                      </h2>


                      {/* SHORT DESCRIPTION */}

                      <p
                        className="blog-short-description"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.shortDescription ||
                            blog.shortDesciption ||
                            blog.excerpt ||
                            "",
                        }}
                      />


                      {/* DESCRIPTION */}

                      <div
                        className="blog-description"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.description ||
                            "",
                        }}
                      />

                    </div>


                    {/* =================================================
                        TAGS + SHARE
                    ================================================= */}

                    <div className="tags-share">


                      <div
                        className="tags"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.tags ||
                            "",
                        }}
                      />


                      {blog.socialLink && (

                        <div className="share">

                          <BlogSharePage
                            blog={blog}
                          />

                        </div>

                      )}

                    </div>

                  </div>


                  {/* =================================================
                      PREVIOUS / NEXT POST
                  ================================================= */}

                  <div className="blog-card">

                    <div className="blog-card-body">

                      <div className="post-nav">


                        {/* PREVIOUS */}

                        <div className="prev-post">

                          <span>
                            - Previous Post
                          </span>


                          {prevBlog ? (

                            <a
                              onClick={() =>
                                navigateToBlog(
                                  prevBlog
                                )
                              }
                              style={{
                                cursor:
                                  "pointer",
                              }}
                            >
                              {prevBlog.title.replace(
                                /-/g,
                                " "
                              )}
                            </a>

                          ) : (

                            <span>
                              No previous post
                            </span>

                          )}

                        </div>


                        <div className="divider"></div>


                        {/* NEXT */}

                        <div
                          className="next-post"
                          style={{
                            textAlign:
                              "right",
                          }}
                        >

                          <span>
                            - Next Post
                          </span>


                          {nextBlog ? (

                            <a
                              onClick={() =>
                                navigateToBlog(
                                  nextBlog
                                )
                              }
                              style={{
                                cursor:
                                  "pointer",
                              }}
                            >
                              {nextBlog.title.replace(
                                /-/g,
                                " "
                              )}
                            </a>

                          ) : (

                            <span>
                              No next post
                            </span>

                          )}

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* =================================================
                      COMMENTS
                  ================================================= */}

                  <div className="blog-card">

                    <div className="blog-card-body">

                      <div className="comments">

                        <h3>
                          {comments.length} Comments
                        </h3>


                        {comments.map(
                          (comment) => {

                            const dateStr =
                              comment.timestamp
                                ? new Date(
                                  comment.timestamp
                                ).toLocaleDateString(
                                  "en-US",
                                  {
                                    month:
                                      "short",
                                    day:
                                      "numeric",
                                    year:
                                      "numeric",
                                  }
                                )
                                : "Recently posted";


                            return (

                              <div
                                className="comment"
                                key={
                                  comment.firestoreId
                                }
                              >

                                <img
                                  src={
                                    comment.imageUrl
                                  }
                                  alt={
                                    comment.name
                                  }
                                />


                                <div className="comment-body">

                                  <div className="comment-header">

                                    <strong>
                                      {
                                        comment.name
                                      }
                                    </strong>


                                    <div className="comment-meta">

                                      Posted{" "}

                                      {
                                        dateStr
                                      }

                                    </div>

                                  </div>


                                  <p>
                                    {
                                      comment.comment
                                    }
                                  </p>

                                </div>

                              </div>

                            );

                          }
                        )}

                      </div>

                    </div>

                  </div>


                  {/* =================================================
                      COMMENT FORM
                  ================================================= */}

                  <div className="blog-card">

                    <div className="blog-card-body">

                      <CommentForm
                        id={blogId}
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  SIDEBAR
              ================================================= */}

              <div className="col-lg-4">


                {/* =================================================
                    CREATOR PROFILE
                ================================================= */}

                {blog.creator && (

                  <div className="profile-card">


                    <img
                      src={
                        blog.creator.image
                      }
                      alt={
                        blog.creator.name
                      }
                      style={{
                        maxWidth:
                          "100%",
                        height:
                          "auto",
                      }}
                    />


                    <div className="profile-content">


                      <h3>
                        {
                          blog.creator.name
                        }
                      </h3>


                      <p className="role">
                        {
                          blog.creator.role
                        }
                      </p>


                      <p className="desc">
                        {
                          blog.creator.description
                        }
                      </p>


                      {/* SOCIAL ICONS */}

                      {blog.socialLink && (

                        <div className="social-icons">


                          {blog.socialLink.fb && (

                            <a
                              href={
                                blog.socialLink.fb
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Facebook"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>

                          )}


                          {blog.socialLink.twitter && (

                            <a
                              href={
                                blog.socialLink.twitter
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>

                          )}


                          {blog.socialLink.linkedIn && (

                            <a
                              href={
                                blog.socialLink.linkedIn
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="LinkedIn"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>

                          )}


                          {blog.socialLink.pinterest && (

                            <a
                              href={
                                blog.socialLink.pinterest
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Pinterest"
                            >
                              <i className="fab fa-pinterest-p"></i>
                            </a>

                          )}


                          {blog.socialLink.instagram && (

                            <a
                              href={
                                blog.socialLink.instagram
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Instagram"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>

                          )}

                        </div>

                      )}

                    </div>

                  </div>

                )}


                {/* =================================================
                    SIDEBAR
                ================================================= */}

                <div className="sidebar">


                  {/* =================================================
                      LATEST POSTS
                  ================================================= */}

                  <div className="card">

                    <h3>
                      Latest Posts
                    </h3>


                    <div className="latest-posts">

                      {latestPosts.map(
                        (latestBlog) => (

                          <div
                            className="post"
                            key={
                              latestBlog.id
                            }
                            onClick={() =>
                              navigateToBlog(
                                latestBlog
                              )
                            }
                            style={{
                              cursor:
                                "pointer",
                            }}
                          >


                            <img
                              src={
                                latestBlog.src
                              }
                              alt={
                                latestBlog.title
                              }
                            />


                            <div className="post-content">


                              <h4>
                                {
                                  latestBlog.title.replace(
                                    /-/g,
                                    " "
                                  )
                                }
                              </h4>


                              <span>

                                {
                                  latestBlog.createdAt
                                    ? new Date(
                                      latestBlog.createdAt
                                    ).toLocaleDateString(
                                      "en-US"
                                    )
                                    : ""
                                }

                              </span>


                            </div>

                          </div>

                        )
                      )}

                    </div>


                    <div className="more-btn">

                      <button
                        onClick={() =>
                          navigate(
                            "/blogs"
                          )
                        }
                      >
                        More
                      </button>

                    </div>

                  </div>

                  {/* =================================================
                      TAGS
                  ================================================= */}

                  <div className="card">

                    <h3>
                      Tags
                    </h3>


                    <div className="tags">

                      {Array.isArray(
                        keywords
                      ) &&
                        keywords.map(
                          (
                            keyword,
                            index
                          ) => (

                            <a
                              href="#"
                              key={
                                index
                              }
                              onClick={(
                                e
                              ) =>
                                e.preventDefault()
                              }
                            >
                              {
                                keyword
                              }
                            </a>

                          )
                        )}

                    </div>

                  </div>


                  {/* =================================================
                      ABOUT APURVA
                  ================================================= */}

                  <div className="card">

                    <div className="about-apurva">


                      <h3>
                        Apurva Software Solutions
                      </h3>


                      <p>

                        <strong>
                          Apurva Software Solutions
                        </strong>{" "}

                        is a forward-thinking
                        technology company
                        dedicated to delivering
                        innovative, scalable,
                        and efficient software
                        solutions for businesses
                        of all sizes.

                      </p>


                      <p>

                        Our team of skilled
                        professionals specializes
                        in custom software
                        development, web and mobile
                        applications, cloud
                        solutions, and IT consulting.

                      </p>


                      <p>

                        Whether you're a startup
                        looking to launch your first
                        app or an enterprise seeking
                        to modernize legacy systems,
                        Apurva Software Solutions is
                        your trusted technology
                        partner.

                      </p>


                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </>
  );
};


export default Blog;

