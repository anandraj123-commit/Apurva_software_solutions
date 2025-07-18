import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("hero");

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <img src="img/logo.png" alt="" />
          <h1 className="sitename">Dewi</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#hero"
                className={activeTab === "hero" ? "active" : ""}
                onClick={() => setActiveTab("hero")}
              >
                Home
              </a>
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
            <li className="dropdown">
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
            </li>
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

        <a className="cta-btn" href="index.html#about">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;