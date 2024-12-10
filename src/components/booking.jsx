import React from 'react';
import Hero from './hero';
const Booking = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">Experience hassle-free travel planning with our convenient online booking system. We make it easy to arrange your perfect getaway with just a few clicks.</p>
              <p className="mb-4">Our booking platform offers a wide range of destinations, flexible scheduling options, and personalized services to ensure your journey is exactly as you envision it. Let us help you create unforgettable travel memories.</p>
              <a className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</a>
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" style={{color: 'white'}} />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" style={{color: 'white'}} />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date" id="date3" data-target-input="nearest">
                      <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" style={{color: 'white'}} />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select bg-transparent" id="select1" style={{color: 'white'}}>
                        <option value="1">Destination 1</option>
                        <option value="2">Destination 2</option>
                        <option value="3">Destination 3</option>
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">

                      <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: "100px", color: 'white' }}></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;