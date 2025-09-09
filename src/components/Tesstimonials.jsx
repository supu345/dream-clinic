import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Fahim from "../assets/doctor.png";
import Foyzun from "../assets/doctor.png";
import Adilah from "../assets/doctor.png";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
import { FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
const Tesstimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Md.Fahim Al-Rashid",
      rating: 5,
      image: Fahim,
      text: "Pain-free procedure with excellent results. The dentist explained everything clearly. A truly wonderful dental experience.",
      title: "Senior RM",
    },
    {
      id: 2,
      name: "Foyzun Nahar",
      rating: 4,
      image: Foyzun,
      text: "State-of-the-art equipment and professional staff made my treatment comfortable. My teeth feel amazing now. Great service!",
      title: "Senior RM",
    },
    {
      id: 3,
      name: "Adilah Tanzim",
      rating: 4,
      image: Adilah,
      text: "Exceptional dental care! The staff was friendly, and my smile looks better than ever. Highly recommend!",
      title: "Senior RM",
    },

    {
      id: 4,
      name: "Md.Omar Malik",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Exceptional dental care! The staff was friendly, and my smile looks better than ever Highly recommend.",

      title: "Senior RM",
    },
    {
      id: 5,
      name: "Md.Hasan",
      rating: 4,
      image:
        "https://images.pexels.com/photos/7793741/pexels-photo-7793741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Broadway Tours & Travels exceeded my expectations. From accommodations to guides, everything was perfectly organized. A trustworthy choice!",
      title: "Senior RM",
    },
  ];
  return (
    <div
      className="px-6 pt-9 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className=" mt-7">
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          className="w-full "
        >
          <div id="testimonials" className="py-10  relative">
            <p className="px-7 text-2xl lg:text-3xl font-bold text-white text-center lg:text-left ml-0 lg:ml-7">
              Amazing Review from Customers
            </p>
            <div className="max-w-full lg:max-w-6xl mx-auto py-10 px-4">
              <Swiper
                style={{
                  "--swiper-pagination-color": "#00C400",
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "10px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                speed={600}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                spaceBetween={5}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 5 },
                  768: { slidesPerView: 2, spaceBetween: 8 },
                  1024: { slidesPerView: 3, spaceBetween: 10 },
                }}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                }}
                className="mySwiper"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="border h-[330px] border-gray-200 bg-white shadow-lg rounded-lg flex flex-col p-4">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`${
                              index < item.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-start text-gray-500 mt-4">
                        <FaQuoteLeft />
                      </div>
                      <p className="py-3 text-gray-700">{item.text}</p>

                      <div className="flex justify-between items-center">
                        <div>
                          <img
                            src={item.image}
                            alt="photo1"
                            className="h-[60px] lg:h-[70px] w-[60px] lg:w-[70px] object-cover rounded-full transition-transform transform hover:scale-110"
                          />
                          <h3 className="font-semibold text-green-600 text-base lg:text-lg">
                            {item.name}
                          </h3>
                          {/* <p className="text-xs lg:text-sm mt-1">
                            {item.title}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination dots container */}
              <div className="swiper-pagination my-6 flex justify-center"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tesstimonials;
