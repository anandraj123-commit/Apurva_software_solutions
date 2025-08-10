import { useState } from "react";
import '../assets/css/Header.css';
import './modal/InternshipModal';
import { Link } from "react-router-dom";

const Header = ({ handleInternshipModal }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isBlink, setIsBlink] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleNavLinkClick = (tabName) => {
    setActiveTab(tabName);
    setMobileNavOpen(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        {/* Mobile Nav Toggle on left */}
        <i
          className="mobile-nav-toggle d-xl-none bi bi-list"
          title="Toggle Mobile Navigation" style={{ color: "var(--accent-color)" }}
          onClick={toggleMobileNav}
        ></i>

        {/* Logo */}
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto"
          title="Apurva Software Solutions - Home"
          onClick={() => handleNavLinkClick("home")}
        >
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
        <nav
          id="navmenu"
          className={`navmenu ${mobileNavOpen ? "mobile-nav-active" : ""}`}
          title="Main Navigation"
        >
          <ul>
            <li>
              <Link
                to="/"
                title="Go to Home"
                className={activeTab === "home" ? "active" : ""}
                onClick={() => handleNavLinkClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                title="Learn more About Apurva Software Solutions"
                className={activeTab === "about" ? "active" : ""}
                onClick={() => handleNavLinkClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                title="Explore our Services"
                className={activeTab === "services" ? "active" : ""}
                onClick={() => handleNavLinkClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                title="View our Portfolio"
                className={activeTab === "portfolio" ? "active" : ""}
                onClick={() => handleNavLinkClick("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                title="Meet our Team"
                className={activeTab === "team" ? "active" : ""}
                onClick={() => handleNavLinkClick("team")}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#internship"
                title="Join our Internship Program"
                className={`${activeTab === "internship" ? "active" : ""} ${isBlink ? "blink" : ""}`}
                onClick={() => {
                  setActiveTab("internship");
                  setIsBlink(false);
                  setMobileNavOpen(false);
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
                onClick={() => handleNavLinkClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
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
