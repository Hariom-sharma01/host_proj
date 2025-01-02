import React from "react";
import { FaUsers, FaClock, FaBullseye, FaShieldAlt } from "react-icons/fa"; // Using react-icons for icons

const WhyChooseUs = () => {
  return (
    <section
      className="py-12 px-4 text-center bg-gray-100"
      id="why-choose-us"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[
          {
            icon: <FaUsers className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />,
            title: "Expert Team",
            description: "Our team of experienced professionals is dedicated to delivering top-notch solutions.",
          },
          {
            icon: <FaClock className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />,
            title: "Timely Delivery",
            description: "We ensure projects are completed on time without compromising quality.",
          },
          {
            icon: <FaBullseye className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />,
            title: "Client-Centric Approach",
            description: "We prioritize client needs to provide customized solutions that exceed expectations.",
          },
          {
            icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4 transition-colors hover:text-blue-800" />,
            title: "Secure Solutions",
            description: "Our services incorporate best practices to ensure your data and systems are secure.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-200 hover:text-blue-600 flex flex-col items-center justify-center"
          >
            {card.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
