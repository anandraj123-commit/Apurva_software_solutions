import Main from "../components/Main";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = ({ modalRef, onSubmitFormRequest }) => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const tabArgument = {
    portfolio: queryParams.get("portfolio"),
    value: queryParams.get("value"),
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <Main
      ref={modalRef}
      tabArgument={tabArgument}
      onSubmitFormRequest={onSubmitFormRequest}
    />
  );
};

export default Home;