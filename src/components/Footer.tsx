import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div className="text-center lg:text-left">
          <img
            src="logo.png"
            alt="TotalCtrl Logo"
            className="h-12 mx-auto lg:mx-0"
          />
          <p className="mt-4 text-gray-700 font-medium">
            Creating a faster fresher future
          </p>
          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 border rounded-lg hover:bg-gray-100"
            >
              <img src="facebook-icon.png" alt="Facebook" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 border rounded-lg hover:bg-gray-100"
            >
              <img
                src="instagram-icon.png"
                alt="Instagram"
                className="h-5 w-5"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 border rounded-lg hover:bg-gray-100"
            >
              <img src="twitter-icon.png" alt="Twitter" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 border rounded-lg hover:bg-gray-100"
            >
              <img src="linkedin-icon.png" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="p-2 border rounded-lg hover:bg-gray-100"
            >
              <img src="youtube-icon.png" alt="YouTube" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-gray-900">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Referral Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                EU Project
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-semibold text-gray-900">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Video Library
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Blog / News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Podcast
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-900">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@totalctrl.com"
                className="text-gray-700 hover:text-green-600 transition"
              >
                hello@totalctrl.com
              </a>
            </li>
            <li>
              <a
                href="tel:+4790215950"
                className="text-gray-700 hover:text-green-600 transition"
              >
                +47 90 21 59 50
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
