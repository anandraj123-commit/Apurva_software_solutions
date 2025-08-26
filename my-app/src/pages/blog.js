import '../assets/scss/Blog.scss';
import { useEffect, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { blogActions } from "../store/index";
import { useNavigate } from "react-router-dom";
import blogsArray from '../data/blogs';
import '../assets/scss/common.scss';
import CommentForm from '../components/comment';
import { getcommentsData } from '../store/blog-slice';
import BlogSharePage from '../components/SharePage';

const Blog = function () {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(blogActions.filterBlog(id));
        dispatch(blogActions.latestPosts());
        dispatch(getcommentsData(id)); // fetch comments here
    }, [dispatch, id]);

   


    const blog = useSelector(state => state.blog);
    const comments = blog?.comments || [];
    const keywords=blog?.keywords || [];
    

    const latestPosts = useSelector(state => {
        console.log("state", state);
        return state.blog.latestPosts || [];
    });

    // Find current blog index
    const currentIndex = blogsArray.findIndex(b => b.id == id);
    const prevBlog = blogsArray[currentIndex - 1] || null;
    const nextBlog = blogsArray[currentIndex + 1] || null;
    // Dispatch actions once on mount or when id changes


    if (!blog) return <p>Loading...</p>; // show loading until blog is ready
    return (
        <>
            <div className="main-wrapper ">
                <section className="blog-header">
                    <div className="overlay"></div>
                    <div className="content">
                        <p className="subtitle">Blog Details</p>
                        <h1 className="title">Blog single</h1>
                        <nav className="breadcrumb">
                            <div className="center">
                                <a href="/">Home</a> /
                                <span>Blog Details</span>
                            </div>
                        </nav>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="col-lg-12">
                                    <div className="blog-card">
                                        <div className="blog-card-image">
                                            <img src={blog.src} alt="Development Meeting" />
                                        </div>

                                        <div className="blog-card-body">
                                            <div className="blog-meta">
                                                <span className="meta-item">🖋️ {blog.type}</span>
                                                <span className="meta-item">💬 {comments.length}</span>
                                                <span className="meta-item">⏰ {blog.createdAt}</span>
                                            </div>

                                            <h2 className="blog-title">{blog.title}</h2>
                                            <p className="blog-short-description" dangerouslySetInnerHTML={{ __html: blog.shortDescription }} />
                                            <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog.description }} />
                                        </div>
                                        <div className="tags-share">

                                            <div className="tags" dangerouslySetInnerHTML={{ __html: blog.tags }}>
                                            </div>


                                            {blog && blog.socialLink && <div className="share">
                                                {/* <span>Share:</span> */}
                                                <BlogSharePage blog={blog} />
                                                {/* <a href={blog.socialLink.fb} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href={blog.socialLink.twitter} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href={blog.socialLink.pinterest} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                                <a href={blog.socialLink.instagram} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </a> */}
                                            </div>}
                                        </div>
                                    </div>
                                    <div className="blog-card">
                                        <div className="blog-card-body">
                                            <div className="post-nav">
                                                <div className="prev-post">
                                                    <span>- Previous Post</span>
                                                    {prevBlog ? (
                                                        <a
                                                            onClick={() => navigate(`/blog?id=${prevBlog.id}&title=${prevBlog.title}`)}
                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            {prevBlog.title}
                                                        </a>
                                                    ) : (
                                                        <span>No previous post</span>
                                                    )}
                                                </div>
                                                <div className="divider"></div>
                                                <div className="next-post" style={{ textAlign: "right" }}>
                                                    <span>- Next Post</span>
                                                    {nextBlog ? (
                                                        <a
                                                            onClick={() => navigate(`/blog?id=${nextBlog.id}&title=${nextBlog.title}`)}
                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            {nextBlog.title}
                                                        </a>
                                                    ) : (
                                                        <span>No next post</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-card">
                                        <div className="blog-card-body">
                                            <div className="comments">
                                                <h3>{comments.length} Comments</h3>
                                                {comments.map((comment) => {
                                                    const dateStr = comment.timestamp
                                                        ? new Date(comment.timestamp).toLocaleDateString("en-US", {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        })
                                                        : "Recently posted";

                                                    return (
                                                        <div className="comment" key={comment.firestoreId}>
                                                            <img src={comment.imageUrl} alt={comment.name} />
                                                            <div className="comment-body">
                                                                <div className="comment-header">
                                                                    <strong>{comment.name}</strong>
                                                                    <div className="comment-meta">Posted {dateStr}</div>
                                                                </div>
                                                                <p>{comment.comment}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                        </div>
                                    </div>

                                    <div className="blog-card">
                                        <div className="blog-card-body">
                                            <CommentForm id={id} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* <div className="search-box">
                                    <input type="text" placeholder="search" />
                                    <button>SEARCH</button>
                                </div> */}

                                {blog && blog.creator && <div className="profile-card">
                                    <img src={blog.creator.image} alt="Profile Image" style={{ maxWidth: "100%", height: "auto" }} />
                                    <div className="profile-content">
                                        <h3>{blog.creator.name}</h3>
                                        <p className="role">{blog.creator.role}</p>
                                        <p className="desc"> {blog.creator.description}</p>

                                        <div className="social-icons">
                                            <a href={blog.socialLink.fb} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                            <a href={blog.socialLink.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                            <a href={blog.socialLink.linkedIn} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            <a href={blog.socialLink.pinterest} target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                            <a href={blog.socialLink.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>}
                                <div className="sidebar">
                                    <div className="card">
                                        <h3>Latest Posts</h3>
                                        <div className="latest-posts">
                                            {latestPosts.map((blog) => (
                                                <div
                                                    className="post"
                                                    key={blog.id}
                                                    onClick={() => navigate(`/blog?id=${blog.id}&title=${blog.title}`)} // navigate on click
                                                    style={{ cursor: "pointer" }} // pointer cursor for better UX
                                                >
                                                    <img src={blog.src} alt={blog.title} />
                                                    <div className="post-content">
                                                        <h4>{blog.title}</h4>
                                                        <span>{blog.createdAt}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="more-btn">
                                            <button onClick={() => navigate("/blogs")}>More</button>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <h3>Tags</h3>
                                        <div className="tags">
                                            {keywords.map((keyword,index)=>{
                                                return (
                                                    <a href="#" key = {index} onClick={e => e.preventDefault()}>{keyword}</a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="about-apurva">
                                        <h3>Apurva Software Solutions</h3>
                                            <p>
                                                <strong>Apurva Software Solutions</strong> is a forward-thinking technology company dedicated to delivering innovative, scalable, and efficient software solutions for businesses of all sizes. With a focus on quality, performance, and customer satisfaction, Apurva combines deep industry knowledge with modern development practices to create products that drive real-world impact.
                                            </p>
                                            <p>
                                                Our team of skilled professionals specializes in custom software development, web and mobile applications, cloud solutions, and IT consulting. We believe in building strong, long-term partnerships with our clients by understanding their unique goals and challenges—and crafting technology that empowers their success.
                                            </p>
                                            <p>
                                                Whether you're a startup looking to launch your first app or an enterprise seeking to modernize legacy systems, Apurva Software Solutions is your trusted technology partner, turning ideas into intelligent solutions.
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
