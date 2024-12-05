import React from 'react';
import Spinner from './components/spinner'
import Topbar from './components/topbar';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Destinations from './components/destinations';
import Packages from './components/packages';
import Booking from './components/booking';
import Process from './components/process';
import Team from './components/team';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import BackToTop from './components/backToTop';
import Contact from './pages/Contact';
import NotFound from './pages/Notfound';
import { Routes, Route } from 'react-router-dom';
const HomePage = () => (
  <>
    <Hero isHome={true} />
    <About />
    <Services />
    <Destinations />
    <Packages />
    <Booking />
    <Process />
    <Team />
    <Testimonials />
  </>
);

const App = () => {
  return (
    <>
      <Spinner />
      <Topbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<><Hero /><About /></>} />
          <Route path="/services" element={<><Hero /><Services /></>} />
          <Route path="/packages" element={<><Hero /><Packages /></>} />
          <Route path="/destination" element={<><Hero /><Destinations /></>} />
          <Route path="/booking" element={<><Hero /><Booking /></>} />
          <Route path="/process" element={<><Hero /><Process /></>} />
          <Route path="/team" element={<><Hero /><Team /></>} />
          <Route path="/testimonial" element={<><Hero /><Testimonials /></>} />
          <Route path="/contact" element={<><Hero /><Contact /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};
export default App;