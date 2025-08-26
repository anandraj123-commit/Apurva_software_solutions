import { Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import routes from './routes';
import ScrollToTop from './components/ScrollToTop';
import Notification from './components/Notification';
import { useEffect, useState } from 'react';
import LoaderOverLay from './components/loader/RouterLoader';
import AnalyticsTracker from './components/AnalyticsTracker';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate a delay for route loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay to your needs

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Notification />
      {loading && <LoaderOverLay />}
      <AnalyticsTracker />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
