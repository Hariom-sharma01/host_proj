import React from 'react';
import { FaUsers, FaClock, FaBullseye, FaShieldAlt } from 'react-icons/fa'; // Using react-icons for icons

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-8 text-center bg-gray-100" id="why-choose-us">
      <h2 className="text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:bg-blue-200 hover:translate-y-[-10px] hover:text-blue-600 flex flex-col items-center justify-center h-64 w-60">
          <FaUsers className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Expert Team</h3>
          <p className="text-gray-600 text-sm text-center">Our team of experienced professionals is dedicated to delivering top-notch solutions.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:bg-blue-200 hover:translate-y-[-10px] hover:text-blue-600 flex flex-col items-center justify-center h-64 w-60">
          <FaClock className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Timely Delivery</h3>
          <p className="text-gray-600 text-sm text-center">We ensure projects are completed on time without compromising quality.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:bg-blue-200 hover:translate-y-[-10px] hover:text-blue-600 flex flex-col items-center justify-center h-64 w-60">
          <FaBullseye className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Client-Centric Approach</h3>
          <p className="text-gray-600 text-sm text-center">We prioritize client needs to provide customized solutions that exceed expectations.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:bg-blue-200 hover:translate-y-[-10px] hover:text-blue-600 flex flex-col items-center justify-center h-64 w-60">
          <FaShieldAlt className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Secure Solutions</h3>
          <p className="text-gray-600 text-sm text-center">Our services incorporate best practices to ensure your data and systems are secure.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
