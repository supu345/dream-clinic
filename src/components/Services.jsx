import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_specialities } from "../store/reducers/homeReducer";
import { PiHeartbeatFill } from "react-icons/pi";
import Heart from "../assets/heart.png";
import Pulmonology from "../assets/biology.png";
import Neurology from "../assets/brain.png";
import Oncology from "../assets/spreading.png";
import Infection from "../assets/mask.png";
import Hematology from "../assets/blood-measurement.png";
import Paediatrician from "../assets/examination.png";
import fever from "../assets/ill.png";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
import { Link } from "react-router-dom";

const Services = () => {
  const dispatch = useDispatch();
  const { specialities, status } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_specialities());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (status === "succeeded" && specialities.length === 0) {
    return <p className="text-center mt-10">No specialities found.</p>;
  }
  return (
    <div className="px-4 md:px-[100px] py-12 mt-7">
      {/*header */}
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
      >
        <div className="flex flex-col md:flex-row gap-7">
          <div className="w-full md:w-1/2  ">
            <div className="flex flex-row items-center  gap-2  ">
              <PiHeartbeatFill className="text-blue-700 text-xl" />
              <p className="text-blue-700">Our Services</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl  my-6">
                Our Healthcare Specialties
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 text-justify w-full md:w-1/2">
            <div className="border-1 h-[100px] border-gray-400"></div>
            <p>
              We provide expert care across multiple specialties, including
              cardiology, pediatrics, orthopedics, neurology, and more. With
              advanced facilities and compassionate doctors, we ensure accurate
              diagnosis, effective treatment, and holistic wellness for patients
              of all ages.
            </p>
          </div>
        </div>
      </motion.div>

      {/* body */}
      {/* <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
      >
        <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <div
            className="bg-gray-200 px-6 py-8 rounded-3xl flex flex-col items-center text-center 
    hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-400 transition duration-300"
          >
            <img src={Heart} alt="Heart" className="h-12 w-12" />
            <p className="text-md py-2 font-semibold">Cardiology</p>
            <p className="text-sm">
              Advanced heart care with expert diagnosis and personalized
              treatment.
            </p>
          </div>

          <div
            className="bg-gray-200 px-6 py-8 rounded-3xl flex flex-col items-center text-center 
    hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-400 transition duration-300"
          >
            <img src={Pulmonology} alt="Heart" className="h-12 w-12" />
            <p className="text-md py-2 font-semibold">Pulmonology</p>
            <p className="text-sm">
              Comprehensive lung care ensuring healthy breathing and respiratory
              wellness.
            </p>
          </div>
          <div className="bg-gray-200  px-6 py-8 rounded-3xl flex flex-col items-center text-center hover:bg-blue-700 hover:text-white">
            <img src={fever} alt="Heart" className="h-12 w-12" />
            <p className="text-md py-2">Fever</p>
            <p className="text-sm">
              Accurate diagnosis and effective treatment for all fever
              conditions.
            </p>
          </div>
          <div className="bg-gray-200  px-6 py-8 rounded-3xl flex flex-col items-center text-center hover:bg-blue-700 hover:text-white">
            <img src={Neurology} alt="Heart" className="h-12 w-12" />
            <p className="text-md py-2 font-semibold">Neurology</p>
            <p className="text-sm">
              Specialized care for brain, nerves, and neurological disorders.
            </p>
          </div>
          <div className="bg-gray-200  px-6 py-8 rounded-3xl flex flex-col items-center text-center hover:bg-blue-700 hover:text-white">
            <img src={Oncology} alt="Heart" className="h-12 w-12" />
            <p className="text-md py-2 font-semibold">Oncology</p>
            <p className="text-sm">
              Compassionate cancer treatment with advanced therapies and
              supportive care.
            </p>
          </div>
          <div className="bg-gray-200  px-6 py-8 rounded-3xl flex flex-col items-center text-center hover:bg-blue-700 hover:text-white">
            <img src={Infection} alt="Infection" className="h-12 w-12" />
            <p className="text-md py-2 font-semibold">Infection</p>
            <p className="text-sm">
              Effective infection management with precise diagnosis and proper
              medication.
            </p>
          </div>
          <div className="bg-gray-200  px-6 py-8 rounded-3xl flex flex-col items-center text-center hover:bg-blue-700 hover:text-white">
            <img src={Hematology} alt="Hematology" className="h-12 w-12" />
            <p className="text-md py-2 font-semibold">Hematology</p>
            <p className="text-sm">
              Expert blood disorder treatment ensuring healthy circulation and
              wellness.
            </p>
          </div>
          <div className="bg-gray-200  px-6 py-8 rounded-3xl flex flex-col items-center text-center hover:bg-blue-700 hover:text-white">
            <img
              src={Paediatrician}
              alt="Paediatrician"
              className="h-12 w-12"
            />
            <p className="text-md py-2 font-semibold">Paediatrician</p>
            <p className="text-sm">
              Complete child healthcare with compassionate doctors and advanced
              treatments.
            </p>
          </div>
        </div>
      </motion.div> */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-[20px] py-9">
        {specialities.slice(0, 8).map((item) => (
          <div
            key={item._id}
            className="bg-blue-100 rounded-lg overflow-hidden shadow"
          >
            <img
              src={item.image1}
              alt={item.title}
              className="h-[250px] w-full object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-bold mt-3">{item.title}</p>
              <p className="py-4">{item.shortDescription}</p>
              <Link
                to={`/specialities/${item._id}`}
                className="inline-block px-4 py-2 bg-[#1C65B3] text-white rounded-full hover:bg-white  hover:text-[#1C65B3]  transition"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* button */}
      <div className="text-center py-6">
        <Link to="/specialities">
          <button className="bg-[#1C65B3] text-white text-xl px-4 py-2 rounded-full">
            View all Specialities
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
