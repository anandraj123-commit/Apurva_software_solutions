import { useState } from "react";
import '../assets/css/Header.css';
import './modal/InternshipModal';
import { Link } from "react-router-dom";

const Header = ({ handleInternshipModal }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isBlink, setIsBlink] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleNavLinkClick = (tabName) => {
    setActiveTab(tabName);
    setMobileNavOpen(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid text-center container-xl position-relative d-flex align-items-center">

        {/* Mobile Toggle */}
        <i
          className="mobile-nav-toggle d-xl-none bi bi-list"
          onClick={toggleMobileNav}
        ></i>

        {/* Logo */}
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto"
          onClick={() => handleNavLinkClick("home")}
        >
          <img src="img/ASS.png" className="m-auto" alt="logo" />
        </Link>

        {/* ✅ DESKTOP NAV (UNCHANGED) */}
        <nav id="navmenu" className="navmenu d-none d-xl-block">
          <ul>
            <li>
              <Link to="/" className={activeTab === "home" ? "active" : ""} onClick={() => handleNavLinkClick("home")}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className={activeTab === "about" ? "active" : ""} onClick={() => handleNavLinkClick("about")}>
                About Us
              </Link>
            </li>

            <li className="relative group">
              <button className={`flex items-center gap-1 ${activeTab === "services" ? "active" : ""}`}>
                Services <span className="text-xs">▼</span>
              </button>

              {/* Desktop Dropdown */}
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-xl rounded-xl p-6 w-[650px] z-50 text-left">
                <div className="grid grid-cols-3 gap-6">

                  <div>
                    <h3 className="text-sm font-semibold text-orange-500 mb-3 border-l-4 p-1 border-orange-500">
                      WEB DEVELOPMENT
                    </h3>
                    <div className="grid gap-3 text-sm">
                      <Link to="/front end services">Front End Services</Link>
                      <Link to="/custom web application">Custom Web Application</Link>
                      <Link to="/full stack development service">Full Stack Development</Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-orange-500 mb-3 border-l-4 p-1 border-orange-500">
                      MOBILE APP DEVELOPMENT
                    </h3>
                    <div className="grid gap-3 text-sm">
                      <Link to="/mobile app development">Mobile App Development</Link>
                      <Link to="/Android Application">Android Application</Link>
                      <Link to="/Ios Application">Ios Application</Link>
                      <Link to="/React Native Application">React Native Application</Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-orange-500 mb-3 border-l-4 p-1 border-orange-500">
                      MARKETING
                    </h3>
                    <div className="grid gap-2 text-sm">
                      <Link to="/Digital Marketing">Digital Marketing</Link>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            <li>
              <Link to="/Services-We-Offer" onClick={() => handleNavLinkClick("Services-We-Offer")}>
                All We Offer
              </Link>
            </li>

            <li>
              <Link to="/discussYourProject" onClick={() => handleNavLinkClick("discussYourProject")}>
                Discuss Your Project
              </Link>
            </li>

            <li>
              <Link to="/blog" onClick={() => handleNavLinkClick("blog")}>
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => handleNavLinkClick("contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* ✅ MOBILE SIDEBAR (NEW - SEPARATE) */}
        <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 xl:hidden
          ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}>

          <div className="p-4 flex justify-end">
            <button onClick={() => setMobileNavOpen(false)}>✕</button>
          </div>

          <ul className="flex flex-col gap-4 p-6">
            <li><Link to="/" onClick={() => handleNavLinkClick("home")}>Home</Link></li>
            <li><Link to="/about" onClick={() => handleNavLinkClick("about")}>About Us</Link></li>

            <li>
              <button onClick={() => setOpenDropdown(!openDropdown)} className="flex justify-between w-full">
                Services <span>▼</span>
              </button>

              {openDropdown && (
                <div className="mt-3 ml-3 space-y-2">
                  <Link to="/front end services">Front End Services</Link><br/>
                  <Link to="/custom web application">Custom Web Application</Link><br/>
                  <Link to="/full stack development service">Full Stack Development</Link>
                </div>
              )}
            </li>

            <li><Link to="/Services-We-Offer">All We Offer</Link></li>
            <li><Link to="/discussYourProject">Discuss Your Project</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Overlay */}
        {mobileNavOpen && (
          <div className="fixed inset-0 bg-black/40 z-40 xl:hidden" onClick={() => setMobileNavOpen(false)}></div>
        )}

      </div>
    </header>
  );
};

export default Header;