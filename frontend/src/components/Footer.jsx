import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <footer className="md:mx-10 text-gray-700 py-10">
      <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} alt="Company Logo" className="mb-4 w-40" />
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-4">COMPANY</p>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact us
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-blue-500">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-4">
            GET IN TOUCH
          </p>
          <ul className="space-y-2">
            <li className="hover:text-blue-500">+1-212-456-7890</li>
            <li className="hover:text-blue-500">greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 pt-6 text-center text-sm">
        <p className="text-gray-600">
          Copyright © 2024 <span className="font-semibold">GreatStack</span> -
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
