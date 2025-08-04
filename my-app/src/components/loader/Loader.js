// Loader.jsx
import "./Loader.css";
import ReactDOM from "react-dom";

function Loader() {
  return (
    <div className="loader-backdrop">
      <div className="loader">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function LoaderOverLay(props){
    return (
      <>
        { ReactDOM.createPortal(
          <Loader/>,
          document.getElementById("loader-overlay")
        )}
      </>
    );
  };
  
