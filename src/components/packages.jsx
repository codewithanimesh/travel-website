import React from 'react';

const Packages = () => {
  const packages = [
    {
      image: "package-1.jpg",
      location: "Thailand",
      price: "12,299.00",
      delay: "0.1s"
    },
    {
      image: "package-2.jpg",
      location: "Indonesia",
      price: "11,499.00",
      delay: "0.3s"
    },
    {
      image: "package-3.jpg",
      location: "Malaysia",
      price: "15,599.00",
      delay: "0.5s"
    }
  ];

  return (
 
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {packages.map((pkg, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={pkg.delay}>
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={`img/${pkg.image}`} alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>{pkg.location}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>2 Person
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">INR {pkg.price}</h3>
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <small key={i} className="fa fa-star text-primary"></small>
                    ))}
                  </div>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                  <div className="d-flex justify-content-center mb-2">
                    <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                    <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Packages;