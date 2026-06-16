import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import routes from "./routes";

import ScrollToTop from "./components/ScrollToTop";
import Notification from "./components/Notification";
import LoaderOverLay from "./components/loader/RouterLoader";
import AnalyticsTracker from "./components/AnalyticsTracker";
import WhatsAppButton from "./components/WhatsAppButton";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect, useState, useRef } from "react";

import useEmailSender from "./components/hooks/useEmailSender";

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const modalRef = useRef();

  const { sendEmails } = useEmailSender();

  function handleInternshipModal() {
    modalRef.current?.open();
  }

  async function onSubmitFormRequest(formData, INFOTYPE) {
    return await sendEmails(formData, INFOTYPE);
  }

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Notification />
      <AnalyticsTracker />

      {loading && <LoaderOverLay />}

      <Header handleInternshipModal={handleInternshipModal} />

      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.path === "/" ? (
                <route.element.type
                  modalRef={modalRef}
                  onSubmitFormRequest={onSubmitFormRequest}
                />
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>

      <Footer
        onSubmitFormRequest={onSubmitFormRequest}
        handleInternshipModal={handleInternshipModal}
      />

      <WhatsAppButton />
    </>
  );
}

export default App;