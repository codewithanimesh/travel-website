import React from 'react';
import { useLocation } from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  const pageName = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';

  const renderContent = () => {
    if (path === '') {
      return (
        <>
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Enjoy Your Vacation With Us
          </h1>
          <p className="fs-4 text-white mb-4 animated slideInDown">
            Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit
          </p>
          <div className="position-relative w-75 mx-auto animated slideInDown">
            <input
              className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Eg: Thailand"
            />
            <button
              type="button"
              className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
              style={{ marginTop: "7px" }}
            >
              Search
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <h1 className="display-3 text-white animated slideInDown">{pageName}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">{pageName}</li>
          </ol>
        </nav>
      </>
    );
  };

  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
