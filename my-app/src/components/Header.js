import { useState } from "react";
import '../assets/css/Header.css';
import './modal/InternshipModal'
import { Link } from "react-router-dom";


const Header = ({ handleInternshipModal }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isBlink, setIsBlink] = useState(true);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src="img/ASS.png" alt="" />
          <h1 className="sitename" name="Apurva Software Solutions" id="Apurva Software Solutions">ASS</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to = "" className={activeTab === "home" ? "active" : ""}
                onClick={() => setActiveTab("home")}>Home</Link>
            </li>
            <li>
              <a
                href="#about"
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeTab === "services" ? "active" : ""}
                onClick={() => setActiveTab("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeTab === "portfolio" ? "active" : ""}
                onClick={() => setActiveTab("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                className={activeTab === "team" ? "active" : ""}
                onClick={() => setActiveTab("team")}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#internship"
                className={`${activeTab === "internship" ? "active" : ""} ${isBlink ? "blink" : ''}`}
                onClick={() => { setActiveTab("internship"); setIsBlink(false); handleInternshipModal(true) }}
              >
                Internship
              </a>
            </li>
            {/* <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li> */}
            <li>
              <a
                href="#contact"
                className={activeTab === "contact" ? "active" : ""}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <Link className="cta-btn" href="index.html#about">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;