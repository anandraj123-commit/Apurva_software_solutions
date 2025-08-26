import React, { useState, useRef } from "react";
import { postingCommentData } from "../store/blog-slice";
import "../assets/scss/common.scss";
import { useDispatch } from "react-redux";
import LoaderOverlay from '../components/loader/Loader';


export default function CommentForm({ id }) {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  // Load saved user info from localStorage
  const savedUser = JSON.parse(localStorage.getItem("commentUser")) || {};
  const isUserSaved = !!savedUser.name && !!savedUser.email && !!savedUser.image;

  const [formData, setFormData] = useState({
    name: savedUser.name || "",
    email: savedUser.email || "",
    comment: "",
    image: null, // Only for first-time upload
    id,
  });
  const [loading, setLoading] = useState(false); // Loader state
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          setErrors((prev) => ({ ...prev, image: "Only image files are allowed" }));
          setFormData((prev) => ({ ...prev, image: null }));
          setImagePreview(null);
          return;
        }
        if (file.size > 2 * 1024 * 1024) {
          setErrors((prev) => ({ ...prev, image: "Image must be less than 2MB" }));
          setFormData((prev) => ({ ...prev, image: null }));
          setImagePreview(null);
          return;
        }
        setFormData((prev) => ({ ...prev, image: file }));
        setImagePreview(URL.createObjectURL(file));
        setErrors((prev) => ({ ...prev, image: null }));
      } else {
        setFormData((prev) => ({ ...prev, image: null }));
        setImagePreview(null);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validation (skip name/email/image if already saved)
  const validateForm = () => {
    const newErrors = {};

    if (!isUserSaved && !formData.name.trim()) newErrors.name = "Name is required";
    else if (!isUserSaved && !/^[a-zA-Z\s]{2,}$/.test(formData.name))
      newErrors.name = "Name must be at least 2 letters and contain only letters";

    if (!isUserSaved && !formData.email.trim()) newErrors.email = "Email is required";
    else if (!isUserSaved && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.comment.trim()) newErrors.comment = "Comment is required";
    else if (formData.comment.trim().length < 5)
      newErrors.comment = "Comment must be at least 5 characters";

    if (!isUserSaved && !formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      let imageUrl = savedUser.image || null;

      // First-time user: upload image to Cloudinary
      if (!isUserSaved && formData.image instanceof File) {
        const form = new FormData();
        form.append("file", formData.image);
        form.append("upload_preset", "comments_preset");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dzdpokvq8/image/upload",
          {
            method: "POST",
            body: form,
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Cloudinary upload error:", errorText);
          throw new Error("Image upload failed");
        }

        const data = await response.json();
        imageUrl = data.secure_url;

        // Save user info in localStorage
        localStorage.setItem(
          "commentUser",
          JSON.stringify({ name: formData.name, email: formData.email, image: imageUrl })
        );
      }

      // Prepare payload for Firebase
      const payload = {
        id: formData.id,
        name: savedUser.name || formData.name,
        email: savedUser.email || formData.email,
        comment: formData.comment,
        imageUrl: imageUrl,
      };

      // Dispatch to store (and Firebase)
      await dispatch(postingCommentData(null, payload)); // null because image already uploaded

      // Reset only comment field & preview
      setFormData((prev) => ({ ...prev, comment: "", image: null }));
      setImagePreview(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      alert("Failed to submit comment");
    }
    setLoading(false); // Stop loader
  };

  return (
    <div className="comment-box">
      {loading && <LoaderOverlay />} {/* Show loader */}
      <h2>Write a Comment</h2>
      <form onSubmit={handleSubmit} noValidate>
        {!isUserSaved && (
          <>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "invalid" : ""}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "invalid" : ""}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                ref={fileInputRef}
                className={errors.image ? "invalid" : ""}
              />
              {errors.image && <span className="error">{errors.image}</span>}
            </div>
          </>
        )}

        <div className="form-group">
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            className={errors.comment ? "invalid" : ""}
          />
          {errors.comment && <span className="error">{errors.comment}</span>}
        </div>

        {imagePreview && (
          <div className="form-group">
            <img src={imagePreview} alt="Preview" className="preview-image" />
          </div>
        )}

        <div className="submit">
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    </div>
  );
}
