import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/LOGOG.png";
import "./style.css";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoWidth = isScrolled ? "150px" : "300px";
  // const logoWidth = isScrolled || window.innerWidth < 768 ? "60px" : "120px";
  const navbarClass = `navbar navbar-expand-lg navbar_fixed_com nav_bar_com ${
    isScrolled ? "scrolled" : ""
  }`;
  return (
    <>
      <nav className={`nav_patti ${navbarClass}`}>
          <div className="container">
            <a className="navbar-brand" href="#/">
              <img
                src={Logo}
                alt="logo"
                className="logo_img_com"
                style={{ width: logoWidth }}
              />
            </a>
            <button
              className="navbar-toggler pt-2 pb-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "var(--main-color)" }}
            >
              <i className="bi bi-hdd-rack-fill text-white"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link-com"
                    activeClassName="active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link-com"
                    aria-current="page"
                    to="/about-page"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link-com dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu rounded drop_down_navlinks_com mt-2"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item drop_down_items_com"
                        to="/all-services"
                      >
                        <div className="circle-com"></div> All Services
                      </Link>
                    </li>
                    <li>
                      <a
                        className="dropdown-item drop_down_items_com"
                        href="#/"
                      >
                        <div className="circle-com"></div>Web Dev
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item drop_down_items_com"
                        href="#/"
                      >
                        <div className="circle-com"></div>Digital MArketing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link-com" aria-current="page" href="#/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link-com"
                    aria-current="page"
                    to="/blogs-page"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link-com"
                    aria-current="page"
                    to="/contact-page"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Index;
