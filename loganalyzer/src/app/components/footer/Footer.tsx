import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2023 Xcelore</p>
        </div>
        <div className="flex space-x-4 ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;