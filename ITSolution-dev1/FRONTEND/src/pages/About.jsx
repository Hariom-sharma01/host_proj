import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Contact from '../components/ContactModal';
const About= () => {
  return (
    <>
    <Navbar/>
    <Contact/>
    <div className="bg-gray-100 text-gray-800">
      {/* Main Section */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600 animate__animated animate__zoomIn">
            About Excel IT Solutions
          </h1>
          <p className="text-center text-gray-600 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
            Delivering innovative and customer-focused IT solutions to help
            businesses thrive in the digital era.
          </p>

          {/* Company Overview */}
          <div className="mb-16 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Excel IT Solutions is a leading provider of comprehensive IT
              services and solutions. Established with a vision to empower
              businesses through technology, we specialize in delivering
              cutting-edge solutions tailored to meet the unique needs of our
              clients.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              With a team of highly skilled professionals, we are committed to
              driving digital transformation and fostering innovation across
              various industries. Whether you're a startup or an established
              enterprise, we provide the expertise and resources needed to
              excel in today's competitive landscape.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-center animate__animated animate__fadeInDown text-blue-600">
              Our Mission & Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-100 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Mission
                </h3>
                <p className="text-gray-700">
                  Our mission is to empower businesses by providing innovative,
                  reliable, and customer-centric IT solutions that drive success
                  and growth.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-100 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Vision
                </h3>
                <p className="text-gray-700">
                  To become a globally recognized IT solutions provider, known
                  for excellence in service delivery, cutting-edge technology,
                  and unparalleled customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16 animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">
              Our Core Values
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed pl-6">
              <li>Integrity and transparency in all our dealings.</li>
              <li>Commitment to innovation and excellence.</li>
              <li>Customer-centric approach for tailored solutions.</li>
              <li>Encouraging teamwork and continuous learning.</li>
              <li>Fostering a culture of creativity and inclusivity.</li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-center animate__animated animate__fadeIn text-blue-600">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "John Doe", role: "CEO & Founder" },
                { name: "Jane Smith", role: "CTO" },
                { name: "Mike Johnson", role: "Lead Developer" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-indigo-50 transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    className="mx-auto rounded-full w-24 h-24 mb-4"
                    src={`https://via.placeholder.com/100?text=${member.name.split(
                      " "
                    )[0]}`}
                    alt={member.name}
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate__animated animate__bounceIn">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Ready to Work with Us?</h2>
            <p className="text-gray-600 mb-8">
              Contact us today to learn more about our services and how we can
              help your business achieve its goals.
            </p>
            <a
              href="/contact"
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;
