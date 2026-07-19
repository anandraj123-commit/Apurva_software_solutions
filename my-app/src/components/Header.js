import { useState } from "react";
import '../assets/css/Header.css';
import './modal/InternshipModal';
import { Link } from "react-router-dom";

const Header = ({ handleInternshipModal }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleNavLinkClick = (tabName) => {
    setActiveTab(tabName);
    setMobileNavOpen(false); // ✅ auto close popup
    setOpenDropdown(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid text-center container-xl position-relative d-flex align-items-center">

        {/* Mobile Toggle */}

        <div className="d-flex align-items-center w-100">

{/* ✅ Logo LEFT (forced) */}
<Link
  to="/"
  className="logo d-flex align-items-center"
  onClick={() => handleNavLinkClick("home")}
  style={{ order: 1 }}
>
  <img src="img/ASS.png" alt="logo" />
</Link>

{/* ✅ Icon RIGHT (forced) */}
<i
  className="mobile-nav-toggle d-xl-none bi bi-list text-black hover:text-orange-500"
  onClick={toggleMobileNav}
  style={{ marginLeft: "auto", order: 2 }}
></i>

</div>

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

        {mobileNavOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-white z-50 xl:hidden">

    {/* Header */}
    <div className="flex items-center justify-between p-4 border-b">

{/* Logo LEFT */}
<Link
  to="/"
  className="logo d-flex align-items-center"
  onClick={() => handleNavLinkClick("home")}
>
  <img src="img/ASS.png" className="h-8" alt="logo" />
</Link>


{/* <button 
  onClick={() => setMobileNavOpen(false)} 
  className="text-black hover:text-orange-500 text-2xl p-2 transition duration-200"
>
  ✕
</button> */}

</div>

    {/* Nav Items */}
    <ul className="flex flex-col p-4 space-y-2 text-left">

      <li>
        <Link to="/" 
          onClick={() => handleNavLinkClick("home")}
          className={`block p-2 rounded transition 
          ${activeTab === "home" 
            ? "bg-orange-500 text-white" 
            : "text-black hover:!text-orange-500"}`}>
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" 
          onClick={() => handleNavLinkClick("about")}
          className={`block p-2 rounded transition 
          ${activeTab === "about" 
            ? "bg-orange-500 text-white" 
            : "text-black hover:!text-orange-500"}`}>
          About Us
        </Link>
      </li>

      <li>
        <button 
          onClick={() => setOpenDropdown(!openDropdown)} 
          className="flex justify-between w-full p-2 text-black hover:!text-orange-500 transition">
          Services <span>▼</span>
        </button>

        {openDropdown && (
  <div className="ml-3 space-y-6">

    {/* ✅ WEB DEVELOPMENT */}
    <div>
      <h3 className="text-sm font-semibold text-orange-500 border-l-4 border-orange-500 pl-2 mb-2">
        WEB DEVELOPMENT
      </h3>

      <div className="ml-2 space-y-2">
        <Link to="/front end services"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          Front End Services
        </Link>

        <Link to="/custom web application"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          Custom Web Application
        </Link>

        <Link to="/full stack development service"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          Full Stack Development
        </Link>
      </div>
    </div>

    {/* ✅ MOBILE APP DEVELOPMENT */}
    <div>
      <h3 className="text-sm font-semibold text-orange-500 border-l-4 border-orange-500 pl-2 mb-2">
        MOBILE APP DEVELOPMENT
      </h3>

      <div className="ml-2 space-y-2">
        <Link to="/mobile app development"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          Mobile App Development
        </Link>

        <Link to="/Android Application"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          Android Application
        </Link>

        <Link to="/Ios Application"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          iOS Application
        </Link>

        <Link to="/React Native Application"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          React Native Application
        </Link>
      </div>
    </div>

    {/* ✅ MARKETING */}
    <div>
      <h3 className="text-sm font-semibold text-orange-500 border-l-4 border-orange-500 pl-2 mb-2">
        MARKETING
      </h3>

      <div className="ml-2 space-y-2">
        <Link to="/Digital Marketing"
          onClick={() => handleNavLinkClick("services")}
          className="block p-2 rounded text-black hover:!text-orange-500 transition">
          Digital Marketing
        </Link>
      </div>
    </div>

  </div>
)}
      </li>

      <li>
        <Link to="/Services-We-Offer" 
          onClick={() => handleNavLinkClick("Services-We-Offer")}
          className={`block p-2 rounded transition 
          ${activeTab === "Services-We-Offer" 
            ? "bg-orange-500 text-white" 
            : "text-black hover:!text-orange-500"}`}>
          All We Offer
        </Link>
      </li>

      <li>
        <Link to="/discussYourProject" 
          onClick={() => handleNavLinkClick("discussYourProject")}
          className={`block p-2 rounded transition 
          ${activeTab === "discussYourProject" 
            ? "bg-orange-500 text-white" 
            : "text-black hover:!text-orange-500"}`}>
          Discuss Your Project
        </Link>
      </li>

      <li>
        <Link to="/blog" 
          onClick={() => handleNavLinkClick("blog")}
          className={`block p-2 rounded transition 
          ${activeTab === "blog" 
            ? "bg-orange-500 text-white" 
            : "text-black hover:!text-orange-500"}`}>
          Blogs
        </Link>
      </li>

      <li>
        <Link to="/contact" 
          onClick={() => handleNavLinkClick("contact")}
          className={`block p-2 rounded transition 
          ${activeTab === "contact" 
            ? "bg-orange-500 text-white" 
            : "text-black hover:!text-orange-500"}`}>
          Contact Us
        </Link>
      </li>

    </ul>
  </div>
)}

      </div>
    </header>
  );
};

export default Header;