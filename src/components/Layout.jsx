import React from "react";
import { Link } from "react-router-dom";
// icons
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <header className="bg-[#051911] h-[96px] max-sm:h-[80px] text-white py-[30px] sm:py-[20px]">
        <nav className="w-[1440px] max-sm:w-screen px-[165px] max-sm:px-[16px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl pt-[12px] max-sm:pt-0 max-sm:text-xl font-bold">
            HalalHolidayCheck
          </Link>
          <ul className="flex space-x-[36px] pt-[15px] text-[18px] max-sm:hidden">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="hover:underline">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-[#F5F5ED] flex-grow mx-auto">{children}</main>
      <footer className="bg-[#051911] text-white">
        <div className="w-[1440px] mx-sm:w-screen mx-auto px-[165px] max-sm:px-[16px] py-[72px] max-sm:py-[28px]">
          <div className="pb-[32px] max-sm:pb-[12px] flex justify-between items-start">
            <div>
              <div className="text-[48px] max-sm:text-[28px] text-gray-100 mb-[32px] max-sm:mb-[20px]">HalalHolidayCheck</div>
              <div className="text-[16px] max-sm:text-[12px] mb-[32px] max-sm:mb-[20px]">Your gateway to halal-friendly holidays</div>
              <div className="flex space-x-[28px] items-center text-[18px] max-sm:text-[12px]">
                <div>About us</div>
                <div>Privacy and Policy</div>
                <div>Contact</div>
                <div>FAQs</div>
                <div>Support</div>
              </div>
            </div>
            <div className="flex items-center max-sm:hidden max-sm:top-0 space-x-[24px] max-sm:space-x-[12px] mt-[33px]">
              <a href="https://www.instagram.com/halalholidaycheck/"><FaInstagram size={24}/></a>
              <a href="https://twitter.com/halalhotelcheck"> <FaXTwitter size={24}/></a>
              <a href="https://halalholidaycheck.com/"><FaFacebook size={24}/></a>
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-100 pt-[32px] border-t border-grey-100">
            <div>&copy; 2024 HalalHolidayCheck. All rights reserved.</div>
            <div className="max-sm:hidden flex items-center space-x-[12px]">
              <FaPhoneAlt />
              <div>+1 (123) 456-7890</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
