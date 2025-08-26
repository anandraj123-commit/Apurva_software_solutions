// ShareIcons.js
import React from "react";

export default function ShareIcons({ blog }) {
  const baseUrl = process.env.REACT_APP_BASE_URL || "https://www.apurvasoftwaresolutions.com";

  const blogTitle = blog?.title || "Apurva Software Solutions – Innovative Web & Mobile App Development";
  const blogDescription = blog?.shortDescription || "Transform your business with Apurva Software Solutions. We specialize in creating responsive web and mobile applications using Angular, React, Ionic, Node.js, and MongoDB. Fast, reliable, and tailored for your growth!";
 const blogUrl = blog?.url || `${baseUrl}/blog?id=${blog?.id || 1}`
  const blogImage = blog?.src || `${baseUrl}/img/blog/social-media-marketing-apurva-software-solutions.jpg`;

  const encodedTitle = encodeURIComponent(blogTitle);
  const encodedDescription = encodeURIComponent(blogDescription);
  const encodedUrl = encodeURIComponent(blogUrl);
  const encodedImage = encodeURIComponent(blogImage);

  return (
    <div className="social-icons">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle} - ${encodedDescription}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle} - ${encodedDescription}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}&source=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle} - ${encodedDescription} ${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Pinterest */}
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle} - ${encodedDescription}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-pinterest-p"></i>
      </a>

      {/* Instagram (link only) */}
      <a href={blogUrl} target="_blank" rel="noopener noreferrer" title="Copy link to share on Instagram">
        <i className="fab fa-instagram"></i>
      </a>

      {/* Telegram */}
      <a
        href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle} - ${encodedDescription}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-telegram-plane"></i>
      </a>
    </div>
  );
}
