import React from 'react';

const Process = () => {
  const steps = [
    { icon: "globe", title: "Choose A Destination", delay: "0.1s" },
    { icon: "dollar-sign", title: "Pay Online", delay: "0.3s" },
    { icon: "plane", title: "Fly Today", delay: "0.5s" }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay={step.delay}>
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                  <i className={`fa fa-${step.icon} fa-3x text-white`}></i>
                </div>
                <h5 className="mt-4">{step.title}</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
