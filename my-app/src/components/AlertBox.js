import React, { useState, useEffect } from 'react';
import '../assets/css/AlertBox.css';

const AlertBox = ({ type, message, duration }) => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (type && message) {
      setAlert({
        type,
        message,
        duration: parseInt(duration) || 0
      });
    }
  }, [type, message,duration]);

  useEffect(() => {
    if (alert?.duration > 0) {
      const timer = setTimeout(() => setAlert(null), alert.duration);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const closeAlert = () => setAlert(null);

  if (!alert?.message) return null;

  return (
    <div className="alert-container">
      <div className={`alert ${alert.type}`}>
        <span>{alert.message}</span>
        <button className="close-btn" onClick={closeAlert}>×</button>
      </div>
    </div>
  );
};

export default AlertBox;
