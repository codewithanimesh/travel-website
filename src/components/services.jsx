import React from 'react';

const Services = () => {
  const serviceItems = [
    { icon: "globe", title: "WorldWide Tours", delay: "0.1s" },
    { icon: "hotel", title: "Hotel Reservation", delay: "0.3s" },
    { icon: "user", title: "Travel Guides", delay: "0.5s" },
    { icon: "cog", title: "Event Management", delay: "0.7s" }
  ];

  return (
    <>
    
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          {[...serviceItems, ...serviceItems].map((service, index) => (
            <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={service.delay}>
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className={`fa fa-3x fa-${service.icon} text-primary mb-4`}></i>
                  <h5>{service.title}</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
