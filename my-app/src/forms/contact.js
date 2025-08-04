import React, { useState } from 'react';
import LoaderOverlay from '../components/loader/Loader';

const Contact = ({ onSubmitFormRequest }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setStatus({ loading: false, error: '', success: '' });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({ loading: false, error: 'Please fill in all fields.', success: '' });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ loading: false, error: 'Please enter a valid email address.', success: '' });
      return;
    }
      setStatus({ loading: true, error: '', success: '' });

      // Send email
      const{loading,error,success}= await onSubmitFormRequest(formData,"CONTACT-US");

      setStatus({
        loading,
        error: error || '',
        success: success ? 'Your message has been sent successfully. We would reach you soon!' : '',
      });

      
      setFormData({ name: '', email: '', subject: '', message: '' });
   
  };

  return (
    <form className="php-email-form" onSubmit={handleSubmit}>
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ minHeight: '45px' }}
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ minHeight: '45px' }}
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ minHeight: '45px' }}
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ resize: 'none' }}
            required
          />
        </div>

        <div className="col-md-12 text-center position-relative">
          {status.loading && <LoaderOverlay />}
          <button type="submit" className="btn btn-primary" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
