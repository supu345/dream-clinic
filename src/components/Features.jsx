import React from "react";
import { PiHeartbeatFill } from "react-icons/pi";
import { TbReportMedical } from "react-icons/tb";
import { ImLeaf } from "react-icons/im";
import { FaRegFileAlt, FaShieldAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Features = () => {
  return (
    <div>
      <div>
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="px-4 md:px-[100px] py-12 mt-7 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="px-12">
            <div className="flex flex-row items-center  gap-2 mb-5 ">
              <PiHeartbeatFill className="text-blue-700 text-xl" />
              <p className="text-blue-700">Our Services</p>
            </div>
            <p className="text-3xl font-bold my-5">
              Why Thousands Choose Soothe for Medical Detox
            </p>
            <div className="border w-[200px] border-blue-400 "></div>
            <p className="my-5">
              98% of patients report feeling safe & respected throughout our
              program, Experience the difference yourself.
            </p>
            <img
              src="https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg"
              alt="features"
              className="rounded-2xl"
            />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="bg-gray-200 px-6 pl-4 py-7 rounded-2xl">
              <div className="flex dflex-row gap-3 items-center text-xl font-bold">
                <TbReportMedical className="font-bold text-blue-700 text-lg" />
                <p>Medical Excellence</p>
              </div>
              <p className="py-5 text-sm">
                Lorem ipsum dolor sit amet conse ctetur adip scing elit tellus
                luctus nec ullam corper mattis pulvinar dapibus leo adip scing.
              </p>
              <button>Explore Now </button>
            </div>
            <div className="bg-gray-900 text-white px-4 pl-4 py-4 rounded-2xl">
              <div className="flex flex-row gap-3 items-center text-xl font-bold">
                <ImLeaf className="font-bold text-white text-lg" />
                <p>Holistic Comfort</p>
              </div>
              <p className="py-5 text-sm">
                Lorem ipsum dolor sit amet conse ctetur adip scing elit tellus
                luctus nec ullam corper mattis pulvinar dapibus leo adip scing.
              </p>
              <button>Explore Now </button>
            </div>
            <div className="bg-blue-900 text-white px-4 pl-4 py-4 rounded-2xl ">
              <div className="flex flex-row gap-3 items-center text-xl font-bold">
                <FaShieldAlt className="font-bold text-white text-lg" />
                <p>Discreet & Secure</p>
              </div>
              <p className="py-5 text-sm">
                Lorem ipsum dolor sit amet conse ctetur adip scing elit tellus
                luctus nec ullam corper mattis pulvinar dapibus leo adip scing.
              </p>
              <button>Explore Now </button>
            </div>
            <div className="bg-gray-200 px-6 pl-4 py-4 rounded-2xl">
              <div className="flex flex-row gap-3 items-center text-xl font-bold">
                <FiHeart className="font-bold text-blue-700 text-lg" />
                <p>Recovery Focused</p>
              </div>
              <p className="py-5 text-sm">
                Lorem ipsum dolor sit amet conse ctetur adip scing elit tellus
                luctus nec ullam corper mattis pulvinar dapibus leo adip scing.
              </p>
              <button>Explore Now </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* countdown */}
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-7 px-4 md:px-[100px]"
      >
        <div className="flex flex-row justify-between ">
          <div className="text-center">
            <p className="text-3xl  text-blue-700 font-bold flex flex-row">
              <CountUp
                start={0}
                end={12}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p>+</p>
            </p>
            <p>Happy Patients</p>
          </div>
          <div className="border-1 h-[70px] border-gray-200"></div>
        </div>

        <div className="flex flex-row justify-between ">
          <div className="text-center">
            <p className="text-3xl text-red-500 font-bold flex flex-row">
              <CountUp
                start={0}
                end={30}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p>+</p>{" "}
            </p>
            <p>Expert Doctors</p>
          </div>
          <div className="border-1 h-[70px] border-gray-200"></div>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="text-center">
            <p className="text-3xl text-green-700 font-bold flex flex-row">
              {" "}
              <CountUp
                start={0}
                end={30}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p>+</p>{" "}
            </p>
            <p>Years Experience</p>
          </div>
          <div className="border-1 h-[70px] border-gray-200"></div>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="text-center">
            <p className="text-3xl text-green-700 font-bold flex flex-row ">
              <CountUp
                start={0}
                end={12}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <p>+</p>{" "}
            </p>
            <p>Completely Recovery</p>
          </div>
        </div>
      </motion.div>
      {/* parallex */}
      <div className="relative h-[550px] w-full flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/4266931/pexels-photo-4266931.jpeg"
          alt="About Us"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="relative flex flex-col md:flex-row items-center  text-white px-[150px]"
        >
          <div className="w-1/2">
            <div>
              <div className="flex flex-row items-center  gap-2 mb-5 ">
                <PiHeartbeatFill className="text-white text-xl" />
                <p className="text-white uppercase">Our Services</p>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="text-3xl w-[400px] font-semibold">
                Admission Made Simple Start in Hours, Not Days
              </p>
              <div className="border h-[100px]"></div>
            </div>
          </div>
          <div className="w-[500px] px-7 mt-6">
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Borem Hpsum bas leen the industry’s standard dummy text
              ever since.
            </p>
          </div>
        </motion.div>
        {/* Content1 */}
      </div>
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="bg-white relative mx-[50px] md:mx-[100px]  -mt-[150px] rounded-2xl shadow-2xl"
      >
        <div className="flex flex-col md:flex-row gap-5 px-3 md:px-7 py-9">
          <div className="text-center md:w-1/3 px-9 ">
            <MdPhoneInTalk className="mx-auto text-4xl text-blue-600 mb-3" />
            <p className="text-lg font-semibold">Free Consultation</p>
            <p className="text-sm text-gray-600">
              Speak to our intake specialist (24/7) for a confidential
              assessment.
            </p>
          </div>

          <div className="text-center md:w-1/3 px-9">
            <FaLeaf className="mx-auto text-4xl text-green-600 mb-3" />
            <p className="text-lg font-semibold">Personalized Plan</p>
            <p className="text-sm text-gray-600">
              Our medical team designs your protocol & verifies insurance
              instantly.
            </p>
          </div>

          <div className="text-center md:w-1/3 px-9">
            <FaRegFileAlt className="mx-auto text-4xl text-purple-600 mb-3" />
            <p className="text-lg font-semibold">Seamless Admission</p>
            <p className="text-sm text-gray-600">
              We arrange transportation and welcome you to our serene facility.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
