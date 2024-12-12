import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className=" navbar navbar-expand-lg navbar-light px-3 px-lg-5  py-lg-0">
      <Link to="/" className="navbar-brand">
        <img 
          src="/img/bharatdev.png" 
          alt="BharatDev Logo" 
        />
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse"
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <NavLink to="/" className="nav-item nav-link" onClick={handleNavCollapse}>Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link" onClick={handleNavCollapse}>About</NavLink>
          <NavLink to="/services" className="nav-item nav-link" onClick={handleNavCollapse}>Services</NavLink>
          <NavLink to="/packages" className="nav-item nav-link" onClick={handleNavCollapse}>Packages</NavLink>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <Link to="/destination" className="dropdown-item" onClick={handleNavCollapse}>Destination</Link>
              <Link to="/booking" className="dropdown-item" onClick={handleNavCollapse}>Booking</Link>
              <Link to="/team" className="dropdown-item" onClick={handleNavCollapse}>Travel Guides</Link>
              <Link to="/testimonial" className="dropdown-item" onClick={handleNavCollapse}>Testimonial</Link>
              <Link to="/404" className="dropdown-item" onClick={handleNavCollapse}>404 Page</Link>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link" onClick={handleNavCollapse}>Contact</NavLink> 
        </div>
        <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4" onClick={handleNavCollapse}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;