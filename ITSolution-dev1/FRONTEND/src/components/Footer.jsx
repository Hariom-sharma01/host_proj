import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 text-gray-800 text-base">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-8">
        {/* About Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Excel IT Solutions</h3>
          <p>We provide top-notch IT solutions for businesses of all sizes. Your success is our mission.</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#hero"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold text-blue-600 mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors transition-transform duration-300 delay-100 transform hover:-translate-y-1"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors transition-transform duration-300 delay-100 transform hover:-translate-y-1"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors transition-transform duration-300 delay-100 transform hover:-translate-y-1"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors transition-transform duration-300 delay-100 transform hover:-translate-y-1"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold text-blue-600 mb-4">Contact Information</h4>
          <p>Phone: +91 12345 67890</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@excelitsolutions.com"
              className="text-blue-600 hover:underline"
            >
              info@excelitsolutions.com
            </a>
          </p>
          <p>Address: 123 Tech Street, IT Park, India</p>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-gray-300 text-sm text-gray-500">
        &copy; 2024 Excel IT Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
