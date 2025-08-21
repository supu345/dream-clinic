import React from "react";
import { PiHeartbeatFill } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { ImFileText2 } from "react-icons/im";
import { PiHeartStraightBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5215000/pexels-photo-5215000.jpeg"
            alt="photo"
            className="h-[650px] w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/6633432/pexels-photo-6633432.jpeg"
            alt="photo"
            className="h-[650px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-start text-white px-14 py-8 text-left">
            <div className="flex flex-row items-center gap-2 mb-4">
              <PiHeartbeatFill className="text-white text-xl" />
              <p className="text-white">Our Services</p>
            </div>

            <p className="text-4xl font-bold my-4">
              Compassion Meets Excellence in Every Heartbeat
            </p>
            <div className="border w-[200px]"></div>

            <p className="mt-4 text-sm max-w-md">
              At Soothe, we believe detox should be as safe and comfortable as
              the recovery that follows. Our licensed medical team specializes
              in evidence-based withdrawal management, combining:
            </p>
            <div className="grid grid-cols-2 gap-9 py-7">
              <div className="flex flex-row gap-4">
                <FaUserDoctor className="bg-blue-200 text-blue-700 rounded-full p-2 text-5xl" />
                <div className="text-sm">
                  <p className="">Board Certified</p>
                  <p>Medical Team</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <ImFileText2 className="bg-blue-200 text-blue-700 rounded-full p-3 text-5xl" />
                <div className="text-sm">
                  <p className="">JCAHO-Accredited</p>
                  <p>Facility</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <PiHeartStraightBold className="bg-blue-200 text-blue-700 rounded-full p-3 text-5xl" />
                <div className="text-sm">
                  <p className="">98% Patient Admission</p>
                  <p>Admission</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <FaRegStar className="bg-blue-200 text-blue-700 rounded-full p-3 text-5xl" />
                <div className="text-sm">
                  <p className="">4.9/5 Patient</p>
                  <p>Satisfaction</p>
                </div>
              </div>
            </div>
            <p className="text-sm max-w-md w-full">
              At Soothe, we believe detox should be as safe and comfortable as
              the recovery that follows. Our licensed medical team specializes
              in evidence-based withdrawal management, combining:
            </p>
            <button className="mt-7 bg-blue-500 text-white px-4 py-2 rounded-full uppercase font-bold">
              Explore more about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
