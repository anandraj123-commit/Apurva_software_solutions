// BlogSharePage.js
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ShareIcons from "./ShareIcons";

export default function BlogSharePage({ blog }) {
  if (!blog) return <p>Blog not found</p>;

  const baseUrl = process.env.REACT_APP_BASE_URL || "https://www.apurvasoftwaresolutions.com";
  const blogUrl = `${baseUrl}/blog/${blog.id}`;
  const keywords = blog.keywords || ["Apurva Software Solutions", "software development company", "global software solutions", "custom software development", "mobile app development", "web development company", "MERN stack development", "MEAN stack development", "React development", "Angular development", "Node.js development", "MongoDB solutions", "full stack development", "India software company", "IT services company", "mobile application development", "enterprise software solutions", "business software solutions", "cross platform app development", "progressive web apps", "hybrid app development", "offshore development company", "software consulting services", "software company in Bihar", "software firm in India", "software internship", "remote internship in development", "free coding internship", "web app development India", "digital transformation partner", "scalable software solutions", "cloud based apps", "MySQL development", "Express.js developer", "startup software partner", "custom CRM development", "software for small businesses", "digital product development", "UI UX design services", "software prototyping", "SaaS application development", "backend development services", "frontend development company", "mobile-first software design", "educational software solutions", "healthcare software development", "ecommerce software company", "IT outsourcing India", "software company Gaya", "software agency India", "full stack internship India","digital marketing services", "SEO services India", "social media marketing company", "pay per click advertising", "content marketing services", "online branding agency", "search engine optimization", "influencer marketing services", "email marketing automation", "performance marketing agency", "reputation management company", "marketing funnel strategy", "lead generation agency", "cyber security services", "penetration testing services", "ethical hacking company", "vulnerability assessment", "data protection solutions", "endpoint security management", "information security consultancy", "network security services", "cloud security company", "maintenance and support services", "software maintenance company", "IT support services", "application support and maintenance", "bug fixing services", "cloud computing company", "AWS cloud services", "Microsoft Azure solutions", "cloud migration expert", "cloud infrastructure management", "DevOps and cloud", "scalable cloud apps", "cloud hosting services", "SaaS cloud platform", "cloud deployment services"]

  // Ensure image URL is absolute and HTTPS
  const blogImage = blog.src
    ? blog.src.startsWith("http")
      ? blog.src
      : `${baseUrl}/${blog.src.replace(/^\/+/, "")}`
    : `${baseUrl}/img/blog/social-media-marketing-apurva-software-solutions.jpg.jpg`;

  return (
    <HelmetProvider>
      <div className="blog-page">
        <Helmet>
          {/* Page title and description */}
          <title>{blog.title || "Apurva Software Solutions"}</title>
          <meta
            name="description"
            content={blog.shortDescription || "Apurva Software Solutions: Web & Mobile Development"}
          />
          <meta name="keywords" content={keywords} />    
          {/* Open Graph / Facebook */}
          <meta property="og:title" content={blog.title || "Apurva Software Solutions"} />
          <meta property="og:description" content={blog.shortDescription || "Web & Mobile App Development"} />
          <meta property="og:image" content={blogImage} />
          <meta property="og:url" content={blogUrl} />
          <meta property="og:type" content="article" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={blog.title || "Apurva Software Solutions"} />
          <meta name="twitter:description" content={blog.shortDescription || "Web & Mobile App Development"} />
          <meta name="twitter:image" content={blogImage} />
        </Helmet>

        <ShareIcons blog={{ ...blog, url: blogUrl, src: blogImage }} />
      </div>
    </HelmetProvider>
  );
}
