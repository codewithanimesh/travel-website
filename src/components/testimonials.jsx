import React from "react";

const Testimonials = () => {
  const testimonials = [
    { image: "testimonial-1.jpg", name: "John Doe", location: "New York, USA" },
    { image: "testimonial-2.jpg", name: "John Doe", location: "New York, USA" },
    { image: "testimonial-3.jpg", name: "John Doe", location: "New York, USA" },
    { image: "testimonial-4.jpg", name: "John Doe", location: "New York, USA" },
  ];

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item bg-white text-center border p-4"
            >
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={testimonial.image}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
              <h5 className="mb-0">{testimonial.name}</h5>
              <p>{testimonial.location}</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
