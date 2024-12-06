import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      image: "testimonial-1.jpg",
      name: "John Doe",
      location: "New York, USA",
      review: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      id: 2,
      image: "testimonial-2.jpg",
      name: "Jane Smith",
      location: "Los Angeles, USA",
      review: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      id: 3,
      image: "testimonial-3.jpg",
      name: "Mike Johnson",
      location: "Chicago, USA",
      review: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      id: 4,
      image: "testimonial-4.jpg",
      name: "Sarah Williams",
      location: "Miami, USA",
      review: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div style={{ '.slick-slide': { padding: '0 10px' } }}>
          <Slider {...settings}>
            {testimonialData.map((item) => (
              <div key={item.id} className="testimonial-item bg-white text-center border p-4" style={{ margin: '10px' }}>
                <img 
                  className="bg-white rounded-circle shadow p-1 mx-auto mb-3" 
                  src={process.env.PUBLIC_URL + `/img/${item.image}`} 
                  alt={item.name}
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">{item.name}</h5>
                <p>{item.location}</p>
                <p className="mt-2 mb-0">{item.review}</p>
              </div>
            ))}
          </Slider>
        </div>
        <style>
          {`
            .slick-center .testimonial-item {
              background-color: var(--bs-primary) !important;
              color: white !important;
            }
            .slick-center .testimonial-item h5,
            .slick-center .testimonial-item p {
              color: white !important;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Testimonials;