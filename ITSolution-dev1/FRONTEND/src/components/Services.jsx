import React from 'react';
import webDevelopmentIcon from '../assets/icons/web.png'; 
import appdev from '../assets/icons/app.png'; 
import itConsultingIcon from '../assets/icons/Itsol.png';
import seoMarketingIcon from '../assets/icons/dbcreation.png';
import Cybersec from '../assets/icons/Cybersecurity.png';
import dbcreation from '../assets/icons/database.png';
import dbmigration from '../assets/icons/dbmigration.png';
import iot from '../assets/icons/IOT.png';

const Services = () => {
  return (
    <section className="services py-16 px-8 text-center bg-gray-100">
      <h2 className="text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">Our Services</h2>
      <div className="services-container flex flex-wrap space-x-8 px-4 py-4 justify-center items-center">
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={webDevelopmentIcon} alt="Web Development" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">Web Development</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Custom websites built with modern technologies to meet your business goals.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={appdev} alt="E-Commerce Solutions" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">App Development</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Explore Tailored App Development for Your Business.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={itConsultingIcon} alt="IT Consulting" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">IT Consulting</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Professional advice and solutions to optimize your IT infrastructure and processes.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={seoMarketingIcon} alt="SEO & Marketing" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">SEO & Marketing</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Boost your online presence and drive more traffic with our SEO and digital marketing services.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={Cybersec} alt="SEO & Marketing" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">Cybersecurity Solutions</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Fortify Your Business with Expert Cybersecurity Solutions.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={iot} alt="SEO & Marketing" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">IOT Solutions</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Experience the Power of Connectivity with Our IoT Services.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={dbmigration} alt="SEO & Marketing" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">Database Migration</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Migrate, Optimize, and Scale with Expert Data Migration Services.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] group flex-shrink-0 w-64 mb-4">
          <img src={dbcreation} alt="SEO & Marketing" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white">Database Creation</h3>
          <p className="text-gray-600 text-sm group-hover:text-white">Empowering Your Data with Scalable Database Solutions.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
