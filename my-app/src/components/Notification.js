// components/Notification.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "../store/ui-slice";
import "../assets/scss/Notification.scss";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(uiAction.hideNotification());
      }, 3000); // auto hide after 3s

      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  if (!notification) return null;

  return (
    <div className={`notification ${notification.status}`}>
      <div className="notification-content">
        <strong>{notification.title}</strong>
        <p>{notification.message}</p>
      </div>
      <button
        className="close-btn"
        onClick={() => dispatch(uiAction.hideNotification())}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
