import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo-no-background.png";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container clearfix">
      <div className='header-inner'>
        <a href="/" className="site-avatar">
          <img src={Logo} alt="Logo" />
        </a>

        {/* Burger Icon / Cross Icon */}
        <div className="burger-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="cross-icon">✕</div>
          ) : (
            <div className="burger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        {/* Navbar with slide-in effect */}
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="nav-link-selected" onClick={toggleMenu}>
                                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeClassName="nav-link-selected" onClick={toggleMenu}>
                                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/timeline" exact activeClassName="nav-link-selected" onClick={toggleMenu}>
                                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact activeClassName="nav-link-selected" onClick={toggleMenu}>
                                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
