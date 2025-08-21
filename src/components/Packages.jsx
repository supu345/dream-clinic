import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { PiHeartbeatFill } from "react-icons/pi";
import diamond from "../assets/diamond.png";
const Packages = () => {
  return (
    <div>
      {/* head */}
      <div className="text-center py-[50px]">
        {/* Icon + text */}
        <div className="flex flex-row items-center justify-center gap-2 mb-5">
          <PiHeartbeatFill className="text-blue-700 text-xl" />
          <p className="text-blue-700">Our Services</p>
        </div>

        {/* Headline */}
        <p className="text-2xl font-semibold mb-2">
          Tailored Detox Programs for Every Journey
        </p>

        {/* Description */}
        <p className="max-w-xl mx-auto mb-4">
          We believe everyone deserves access to safe detox. Our team will help
          you find the most effective option for your budget and needs.
        </p>

        {/* Border centered */}
        <div className="border-b-2 border-blue-700 w-[200px] mx-auto"></div>
      </div>
      {/* pkg */}
      <div className="flex flex-col md:flex-row md:gap-9 md:px-[200px] px-5  items-stretch">
        {/* pkg 1 */}
        <div className=" mb-9 md:w-[300px] md:h-[400px] bg-gray-200 text-center p-6 rounded-xl shadow-md">
          <AiOutlineProfile className="bg-blue-500 text-white text-4xl p-2 rounded-full mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">Basic Care</p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet conse ctetur adip scing elit tellus.
          </p>
          <p className="text-xl font-bold mb-2">$99 / Month</p>
          <p>24/7 medical monitoring</p>
          <p>Private room</p>
          <p className="mb-4">Medication management</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
        {/* pkg 2 */}
        <div
          className="mb-9 md:w-[300px] md:h-[450px]  -mt-6 text-center p-12 rounded-xl shadow-lg relative bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6633432/pexels-photo-6633432.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/40 rounded-xl"></div>{" "}
          {/* overlay for readability */}
          <div className="relative z-10">
            <img src={diamond} alt="" className="w-[40px] h-[40px] mx-auto" />
            <p className="text-lg font-semibold mb-2 text-white">
              Premium Care
            </p>
            <p className="text-sm mb-4 text-gray-100">
              Lorem ipsum dolor sit amet conse ctetur adip scing elit tellus
              luctus nec ullam corper mattis pulvinar.
            </p>
            <p className="text-xl font-bold mb-2 text-white">$199 / Month</p>
            <p className="text-white">24/7 medical monitoring</p>
            <p className="text-white">Private room</p>
            <p className="mb-4 text-white">Medication management</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* pkg 3 */}
        <div className="mb-9 md:w-[300px] md:h-[400px] bg-gray-200 text-center p-6 rounded-xl shadow-md">
          <AiOutlineProfile className="bg-blue-500 text-white text-4xl p-2 rounded-full mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">Executive Care</p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet conse ctetur adip scing elit tellus.
          </p>
          <p className="text-xl font-bold mb-2">$399 / Month</p>
          <p>24/7 medical monitoring</p>
          <p>Private room</p>
          <p className="mb-4">Medication management</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
