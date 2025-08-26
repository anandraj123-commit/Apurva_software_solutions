// Loader.js
import '../../assets/scss/Loader.scss';
import ReactDOM from "react-dom";

const Loader = () => {
  return (
    <div className="routing-loader-container">
      <div className="spinner"></div>
    </div>
  );
};


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