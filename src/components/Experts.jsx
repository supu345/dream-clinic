import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { LuMoveRight } from "react-icons/lu";
import { PiHeartbeatFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Experts = () => {
  return (
    <div className="px-4 md:px-[100px] py-12 mt-7">
      {/* <p>
        https://preview.themeforest.net/item/soothe-medical-healthcare-elementor-template-kit/full_screen_preview/59334340
      </p> */}
      {/*header */}
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="flex flex-col md:flex-row gap-7"
      >
        <div className="w-full md:w-1/2  ">
          <div className="flex flex-row items-center  gap-2  ">
            <PiHeartbeatFill className="text-blue-700 text-xl" />
            <p className="text-blue-700">Our Experts</p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl  my-6">Our Specialist Doctors</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 text-justify w-full md:w-1/2">
          <div className="border-1 h-[100px] border-gray-400"></div>
          <p className="px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            officia voluptatem, quibusdam dicta quidem necessitatibus vero
          </p>
        </div>
      </motion.div>
      {/*body*/}
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 py-7"
      >
        {/*1 */}
        <div
          className="bg-blue-700 rounded-2xl flex flex-col md:flex-row overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/29506607/pexels-photo-29506607.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg"
              alt="photo"
              className="h-[220px] md:h-full w-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 px-6 py-6 flex flex-col justify-center">
            <p className="text-white text-xl md:text-2xl font-semibold">
              Dr. Ayesha Rahman
            </p>
            <p className="text-gray-200 py-3 font-semibold italic text-sm md:text-base">
              Senior Consultant – Cardiology
            </p>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                15+ years experience
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Pioneered low protocols
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Board certified Medicine
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center mt-4 cursor-pointer">
              <p className="text-white font-medium text-sm md:text-base">
                Book Now
              </p>
              <LuMoveRight className="text-white text-lg" />
            </div>
          </div>
        </div>
        {/*2 */}
        <div
          className="bg-blue-700 rounded-2xl flex flex-col md:flex-row overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/29506607/pexels-photo-29506607.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg"
              alt="photo"
              className="h-[220px] md:h-[265px] w-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 px-6 py-6 flex flex-col justify-center">
            <p className="text-white text-xl md:text-2xl font-semibold">
              Dr. Imran Hossain
            </p>
            <p className="text-gray-200 py-3 font-semibold italic text-sm md:text-base">
              Specialist – Neurology & Brain Disorders
            </p>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                15+ years experience
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Pioneered low protocols
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Board certified Medicine
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center mt-4 cursor-pointer">
              <p className="text-white font-medium text-sm md:text-base">
                Book Now
              </p>
              <LuMoveRight className="text-white text-lg" />
            </div>
          </div>
        </div>
        {/*3 */}
        <div
          className="bg-blue-700 rounded-2xl flex flex-col md:flex-row overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/29506607/pexels-photo-29506607.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/4270364/pexels-photo-4270364.jpeg"
              alt="photo"
              className="h-[220px] md:h-[265px] w-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 px-6 py-6 flex flex-col justify-center">
            <p className="text-white text-xl md:text-xl font-semibold">
              Dr. Mahmudul Karim
            </p>
            <p className="text-gray-200 py-3 font-semibold italic text-sm md:text-base">
              Oncologist – Cancer & Chemotherapy Specialist
            </p>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                15+ years experience
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Pioneered low protocols
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Board certified Medicine
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center mt-4 cursor-pointer">
              <p className="text-white font-medium text-sm md:text-base">
                Book Now
              </p>
              <LuMoveRight className="text-white text-lg" />
            </div>
          </div>
        </div>
        {/*4 */}
        <div
          className="bg-blue-700 rounded-2xl flex flex-col md:flex-row overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/29506607/pexels-photo-29506607.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
              alt="photo"
              className="h-[220px] md:h-[265px] w-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 px-6 py-6 flex flex-col justify-center">
            <p className="text-white text-xl md:text-xl font-semibold">
              Dr. Farhana Kabir
            </p>
            <p className="text-gray-200 py-3 font-semibold italic text-sm md:text-base">
              Consultant – Pediatrics & Child Health
            </p>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                15+ years experience
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Pioneered low protocols
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsFillArrowUpRightCircleFill className="text-white text-lg" />
              <p className="text-gray-200 text-sm md:text-base">
                Board certified Medicine
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center mt-4 cursor-pointer">
              <p className="text-white font-medium text-sm md:text-base">
                Book Now
              </p>
              <LuMoveRight className="text-white text-lg" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experts;
