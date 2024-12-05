import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <NavLink to="/" className="nav-item nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link">About</NavLink>
          <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
          <NavLink to="/packages" className="nav-item nav-link">Packages</NavLink>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <Link to="/destination" className="dropdown-item">Destination</Link>
              <Link to="/booking" className="dropdown-item">Booking</Link>
              <Link to="/team" className="dropdown-item">Travel Guides</Link>
              <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
              <Link to="/404" className="dropdown-item">404 Page</Link>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink> 
        </div>
        <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
