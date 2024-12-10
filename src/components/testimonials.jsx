import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      image: "testimonial-1.jpg",
      name: "Takashi Yamamoto",
      location: "Mumbai, India",
      review: "INIAD's innovative approach to education has transformed my understanding of technology. The hands-on projects and collaborative environment have prepared me well for my future career."
    },
    {
      id: 2,
      image: "testimonial-2.jpg",
      name: "Yuki Tanaka",
      location: "Delhi, India",
      review: "The interdisciplinary curriculum at INIAD helped me develop both technical skills and business acumen. The professors are highly knowledgeable and always supportive."
    },
    {
      id: 3,
      image: "testimonial-3.jpg",
      name: "Sakura Suzuki",
      location: "Bangalore, India",
      review: "INIAD's focus on practical learning and industry collaboration provides students with real-world experience. The facilities and resources are cutting-edge."
    },
    {
      id: 4,
      image: "testimonial-4.jpg",
      name: "Hiroshi Sato",
      location: "Chennai, India",
      review: "As an educator at INIAD, I'm impressed by our students' enthusiasm for learning and innovation. Our unique educational model truly prepares them for the digital age."
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
          <h1 className="mb-5">Our INIAD Community Says!!!</h1>
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