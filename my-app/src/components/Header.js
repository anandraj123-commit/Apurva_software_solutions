import { useState } from "react";
import '../assets/css/Header.css';
import './modal/InternshipModal';
import { Link } from "react-router-dom";

const Header = ({ handleInternshipModal }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isBlink, setIsBlink] = useState(true);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center me-auto" title="Apurva Software Solutions - Home">
          <img
            src="img/ASS.png"
            alt="Apurva Software Solutions Logo"
            title="Apurva Software Solutions Logo"
          />
          <h1 className="sitename" name="Apurva Software Solutions" id="Apurva Software Solutions">
            ASS
          </h1>
        </Link>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu" title="Main Navigation">
          <ul>
            <li>
              <Link
                to="/"
                title="Go to Home"
                className={activeTab === "home" ? "active" : ""}
                onClick={() => setActiveTab("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                title="Learn more About Apurva Software Solutions"
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                title="Explore our Services"
                className={activeTab === "services" ? "active" : ""}
                onClick={() => setActiveTab("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                title="View our Portfolio"
                className={activeTab === "portfolio" ? "active" : ""}
                onClick={() => setActiveTab("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                title="Meet our Team"
                className={activeTab === "team" ? "active" : ""}
                onClick={() => setActiveTab("team")}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#internship"
                title="Join our Internship Program"
                className={`${activeTab === "internship" ? "active" : ""} ${isBlink ? "blink" : ''}`}
                onClick={() => {
                  setActiveTab("internship");
                  setIsBlink(false);
                  handleInternshipModal(true);
                }}
              >
                Internship
              </a>
            </li>
            <li>
              <a
                href="#contact"
                title="Contact Apurva Software Solutions"
                className={activeTab === "contact" ? "active" : ""}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Nav Toggle */}
          <i className="mobile-nav-toggle d-xl-none bi bi-list" title="Toggle Mobile Navigation"></i>
        </nav>

        {/* Call-to-Action Button */}
        <Link
          to="/#about"
          className="cta-btn"
          title="Get Started with Apurva Software Solutions"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
