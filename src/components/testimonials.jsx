import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      image: "testimonial-1.jpg",
      name: "Priya Patel",
      location: "Mumbai, India",
      review: "Amazing travel experience! The tour package was perfectly planned and the service was exceptional. Will definitely recommend to my friends and family."
    },
    {
      id: 2,
      image: "testimonial-2.jpg",
      name: "Rajesh Kumar",
      location: "Delhi, India",
      review: "The hotel accommodations were fantastic and the guided tours were very informative. The team made sure we had a comfortable and memorable trip."
    },
    {
      id: 3,
      image: "testimonial-3.jpg",
      name: "Amit Sharma",
      location: "Bangalore, India",
      review: "Excellent service from start to finish. The destinations were beautiful and the local guides were very knowledgeable. A perfect vacation experience!"
    },
    {
      id: 4,
      image: "testimonial-4.jpg",
      name: "Meera Singh",
      location: "Chennai, India",
      review: "Had the best time during our family trip. The itinerary was well-planned and the staff was very helpful. Will definitely book again for our next vacation."
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
          <h1 className="mb-5">Our Happy Clients Say!!!</h1>
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