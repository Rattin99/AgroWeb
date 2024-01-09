

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p>123 Farming Way</p>
          <p>AgriCity, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
          <h2 className="text-lg font-bold mb-4">Newsletter</h2>
          <p>Subscribe to our newsletter for updates on the latest in agriculture.</p>
          <form className="flex items-center mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className=" text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2023 Agriculture Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
