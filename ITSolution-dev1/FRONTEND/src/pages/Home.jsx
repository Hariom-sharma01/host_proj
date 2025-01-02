import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Contact from '../components/ContactModal';
const Home = () => {
  return (
    <>
      <Navbar />
      <div id="Contact">
        <Contact />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer />
    </>
  )
};
export default Home;
