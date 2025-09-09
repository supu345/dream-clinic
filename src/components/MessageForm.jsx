import axios from "axios";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"visible"}
        className="bg-blue-100"
      >
        <div className="px-6 py-7 flex flex-col md:flex-row gap-5">
          <div className="w-1/2">
            <div className="text-center">
              {/* Centered Flex Row */}
              <div className="flex justify-center">
                <div className="flex flex-row gap-2 items-center text-[#15B392]">
                  <BsStars />
                  <p className="uppercase font-bold">GET APPOINTMENT</p>
                  <TbDental className="mt-1 font-bold" />
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-4">
                <p className="text-4xl font-semibold">Make An Appointment</p>
              </div>
            </div>
            {/* form */}
            <div className="py-7">
              <form onSubmit={handleMessage}>
                <div className="py-5  ">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-white py-3 px-3 mb-4  rounded-3xl mr-6 "
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-white py-3 px-3 rounded-3xl "
                  />
                </div>
                <div className="py-3">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white py-3 px-3   mb-4  rounded-3xl mr-6 "
                  />
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white  py-3 px-3 rounded-3xl  "
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white py-3 px-3 rounded-3xl w-[300px] md:w-[4s50px] mt-3 "
                />
                <div className="mt-6">
                  <button
                    type="submit"
                    className="rounded-2xl bg-green-400 text-xl text-white p-2 px-4 hover:bg-green-800  "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg"
              alt="photo"
              className="h-[400px] w-[400px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MessageForm;
