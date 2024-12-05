import React from 'react';

const Destinations = () => {
  const destinations = [
    { img: "destination-1.jpg", discount: "30% OFF", place: "Thailand" },
    { img: "destination-2.jpg", discount: "25% OFF", place: "Malaysia" },
    { img: "destination-3.jpg", discount: "35% OFF", place: "Australia" },
    { img: "destination-4.jpg", discount: "20% OFF", place: "Indonesia" }
  ];

  return (
    
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
          <h1 className="mb-5">Popular Destination</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              {destinations.slice(0, 3).map((dest, index) => (
                <div 
                  key={index} 
                  className={`col-lg-${index === 0 ? '12' : '6'} col-md-12 wow zoomIn`} 
                  data-wow-delay={`${0.1 + index * 0.2}s`}
                >
                  <a className="position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid" src={`img/${dest.img}`} alt="" />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      {dest.discount}
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      {dest.place}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: "350px" }}>
            <a className="position-relative d-block h-100 overflow-hidden" href="">
              <img 
                className="img-fluid position-absolute w-100 h-100" 
                src={`img/${destinations[3].img}`} 
                alt="" 
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                {destinations[3].discount}
              </div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                {destinations[3].place}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
