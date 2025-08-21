import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
  FaPhone,
} from "react-icons/fa";
import doc from "../assets/doctor-re-bg.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GiChestnutLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setShowButton(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500/50 to-green-500/50 flex flex-row px-[100px] py-6 h-[300px]">
        <div className="w-1/2 text-white">
          <p className="text-4xl font-bold text-white">
            Start Your Journey to Better Health Now
          </p>
          <p className="py-3">
            Contact us today to schedule your appointment and embark on your
            journey to better health.
          </p>
          <div className="flex flex-row gap-3">
            <button className="flex flex-row gap-4 items-center bg-blue-700 text-white p-2 px-4 rounded-full mt-4">
              Schedule an Appointment <BsArrowUpRightCircleFill />
            </button>
            <button className="flex flex-row gap-4 items-center bg-blue-200 text-gray-700 p-2 px-4 rounded-full mt-4">
              <FaPhone /> 0123456789
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <img src={doc} alt="" className="h-[400px] w-[300px] object-cover" />
        </div>
      </div>
      <footer className="bg-gray-900 text-gray-200 py-16 px-6 relative">
        {/* Footer content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex  items-center gap-2 font-bold text-2xl ">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                {/* <img src={logo} alt="logo" className="h-[70px] w-[70px]" /> */}
                <GiChestnutLeaf className="text-green-700" />
              </Link>
              <p classNkkame="text-blue-700">Serenia</p>
            </div>
            <p className="text-gray-400">
              Our mission is simple yet profound: to empower individuals and
              families in our community to live healthier, happier lives.
            </p>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="w-5 h-5 hover:text-white cursor-pointer" />
              <FaTwitter className="w-5 h-5 hover:text-white cursor-pointer" />
              <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">
                Detox Programs
              </li>
              <li className="hover:text-white cursor-pointer">
                Medical Supervision
              </li>
              <li className="hover:text-white cursor-pointer">
                Therapy & Counseling
              </li>
              <li className="hover:text-white cursor-pointer">
                Aftercare Support
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              123 Wellness Street, City, Country
            </p>
            <p className="text-gray-400 mb-2">Phone: +123 456 7890</p>
            <p className="text-gray-400 mb-2">Email: info@soothe.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Soothe. All rights reserved.
        </div>

        {/* Scroll To Top */}
        {showButton && (
          <div
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg bg-white hover:bg-blue-100 transition"
          >
            <svg
              className="w-12 h-12 -rotate-90 absolute"
              viewBox="-1 -1 102 102"
            >
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#3b82f6"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 50ms linear" }}
              />
            </svg>
            <FaArrowUp className="text-blue-600 relative z-10 w-5 h-5" />
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
