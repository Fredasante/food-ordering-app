import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-200 mt-10 lg:mt-20">
      <div className="container mx-auto bg-[#0F172B] py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to bringing you the best dining experience. Our
              app connects you with top-rated restaurants, offering a wide
              variety of cuisines to choose from.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Order Now
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/alfred-apenteng/"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/Fredasante"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://alfredasante.vercel.app/"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a
                href="https://x.com/YawColle"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EpicEats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
