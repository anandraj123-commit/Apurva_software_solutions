import React, { useState } from 'react';
import LoaderOverlay from '../components/loader/Loader';
import AlertBox from '../components/AlertBox';

const Subscribe = ({ onSubmitFormRequest ,lft,rtl,top}) => {
  console.log('lft',lft,'rtl',rtl);
  const [formData, setFormData] = useState({
    email: ''
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
    const { email } = formData;

    if (!email.trim()) {
      setStatus({
        loading: false,
        error: 'Please fill in all fields.',
        success: '',
      });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({
        loading: false,
        error: 'Please enter a valid email address.',
        success: '',
      });
      return;
    }

    setStatus({ loading: true, error: '', success: '' });

    const { loading, error, success } = await onSubmitFormRequest(
      formData,
      'SUSCRIBE'
    );

    setStatus({
      loading,
      error: error || '',
      success: success || '',
    });

    setFormData({ email: '' });
  };

  return (
    <>
      {status.success && (
        <AlertBox
          type="success"
          message="✅ Subscribed Successfully!"
          duration="3000"
        />
      )}

      {status.loading && (
        <AlertBox
          type="loading"
          message="⏳ Sending, Please Wait..."
          duration="3000"
        />
      )}

      {status.error && (
        <AlertBox
          type="error"
          message="❌ Something Went Wrong!"
          duration="3000"
        />
      )}

      <form className="php-email-form" onSubmit={handleSubmit}>
        <div className="row gy-4">
          <div className="col-md-12">
            <div
              className="position-relative"
              style={{ width: '100%',
                top: `${top}px`,
                left: `${lft}px`,
                right:`${rtl}px`}} >
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  minHeight: '55px',
                  paddingRight: '130px',
                }}
                required
              />

              <button
                type="submit"
                disabled={status.loading}
                className="btn position-absolute"
                style={{
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: '45px',
                  minWidth: '110px',
                  zIndex: 2,
                }}
              >
                {status.loading ? 'Sending...' : 'Subscribe'}
              </button>
            </div>
          </div>

          <div className="col-md-12 text-center position-relative">
            {status.loading && <LoaderOverlay />}
          </div>
        </div>
      </form>
    </>
  );
};

export default Subscribe;