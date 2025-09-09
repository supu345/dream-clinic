import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { PiMapPinLight } from "react-icons/pi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import MessageForm from "../components/MessageForm";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="mt-[80px]">
      {/*parallex */}
      <div
        className="relative bg-fixed h-[450px] bg-cover bg-center flex items-center pl-9"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6129246/pexels-photo-6129246.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center bg-blue-900/60 p-9 rounded-xl">
          <p className="text-center text-white text-5xl font-bold">
            Contact Us
          </p>
          <div className="relative flex flex-row gap-2 items-center mt-5">
            <Link to="/">
              <p className="text-center text-white text-xl ">Home</p>
            </Link>

            <p className="text-center text-white text-xl ">/ Contact Us</p>
          </div>
          {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
        </div>
      </div>
      {/*div */}
      <div className="flex flex-row gap-6 p-7 py-[50px] px-8">
        <div
          className="bg-gradient-to-r from-red-500/10 to-green-200/50 w-1/2 p-4 rounded-md text-center 
                transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
        >
          <p className="text-2xl font-semibold">
            Japan Bangladesh Friendship Hospitals
          </p>
          <p>Bus Stand, Plot # 55 Satmasjid Road, Dhaka 1209</p>
        </div>

        <div
          className="bg-gradient-to-r from-red-500/10 to-green-200/50 w-1/2 p-4 rounded-md text-center 
                transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
        >
          <p className="text-2xl font-semibold">
            Japan Bangladesh Friendship Hospitals
          </p>
          <p>+8801711647877, 01780335953</p>
        </div>
      </div>

      <MessageForm />

      <div
        className="map-container-wrapper"
        style={{ width: "100%", height: "500px", overflow: "hidden" }}
      >
        <iframe
          className="map-container"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.03753709658616!2d90.42361637354097!3d23.81181132974156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001e630e5b%3A0x6d8751ac6b361921!2sDental%20Couple!5e0!3m2!1sen!2sbd!4v1746033869219!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
