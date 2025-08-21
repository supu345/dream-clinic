import React from "react";
import sign from "../assets/signature.png";
import lab from "../assets/laboratory (1).png";
import doctor from "../assets/doctor.png";
import healthCheck from "../assets/health-check.png";
import { RiArrowRightUpBoxFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
const About = () => {
  return (
    <div className="mt-[100px]">
      <img
        src="https://images.pexels.com/photos/32213424/pexels-photo-32213424.jpeg"
        alt=""
        className="h-[550px] w-full object-cover"
      />

      <div>Home/ about us</div>

      <div className="flex flex-row gap-6">
        <div className="py-[100px] px-5 w-1/2">
          <p className="uppercase py-5">About Us</p>
          <p className="text-4xl">
            Caring For The Health & Well Being Of Family.
          </p>
          <p className="py-6">
            Our family-centered approach to healthcare ensures that each member
            of your family receives personalized attention and care tailored to
            their unique needs. We believe in building strong relationships with
            our patients, fostering trust.
          </p>

          <div className="py-6 flex flex-row gap-6">
            <img
              src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg"
              alt=""
              className="h-[200px] w-[200px] object-cover"
            />
            <div>
              <p className="text-2xl font-bold">Dr. Elizabeth Foster</p>
              <p className="mb-6">Family Physician</p>
              <div className="border"></div>
              <img src={sign} alt="" className=" object-cover" />
            </div>
          </div>
        </div>
        <div className="py-[100px] px-5 w-1/2 flex flex-row gap-9">
          <img
            src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
            alt=""
            className="h-[400px] w-[250px] object-cover rounded-full mt-[150px]"
          />
          <img
            src="https://images.pexels.com/photos/12902932/pexels-photo-12902932.jpeg"
            alt=""
            className="h-[400px] w-[250px] object-cover rounded-full "
          />
        </div>
      </div>
      {/*2 */}
      <div className="flex flex-row gap-6 bg-[#1C65B3]">
        <div className="w-1/2 px-5 py-[100px]">
          <img
            src="https://images.pexels.com/photos/9574556/pexels-photo-9574556.jpeg"
            alt=""
            className="h-[380px] w-[600px] object-cover"
          />
        </div>
        <div className="w-1/2 px-5 py-[150px] text-white">
          <p className="uppercase">Who We Are</p>
          <p className="text-5xl font-bold py-5">
            Improving The Quality Of Your Life Through Better Health.
          </p>
          <p>
            We offer a wide range of comprehensive healthcare services to
            address all aspects of your health. From preventive care and health
            screenings to specialized treatments and chronic disease management.
          </p>
        </div>
      </div>
      {/*Top Services */}
      <div className=" px-6 py-[70px] ">
        <div>
          <p className="uppercase">Top Services</p>
          <p className="text-5xl font-semibold py-5 w-[500px]">
            We Are a Pogressive Medical Clinic.
          </p>
        </div>
        <div className="flex flex-row gap-6 py-5">
          <div className="w-1/3 bg-gray-100 px-6 py-8">
            <img src={lab} alt="" className="h-[60px] w-[60px]" />
            <p className="text-2xl font-semibold py-3">Modern Laboratory</p>
            <p className="py-3">
              Our laboratory is equipped with the latest diagnostic equipment
              and automation systems, ensuring precise.
            </p>
            <button>Read more </button>
          </div>
          <div className="w-1/3 bg-gray-100 px-6 py-8">
            <img src={doctor} alt="" className="h-[60px] w-[60px]" />
            <p className="text-2xl font-semibold py-3">Eperienced Doctors</p>
            <p className="py-3">
              we take pride in our team of experienced doctors who are at the
              forefront of delivering exceptional.
            </p>
            <button>Read more </button>
          </div>
          <div className="w-1/3 bg-gray-100 px-6 py-8">
            <img src={healthCheck} alt="" className="h-[60px] w-[60px]" />
            <p className="text-2xl font-semibold py-3">Eperienced Doctors</p>
            <p className="py-3">
              we take pride in our team of experienced doctors who are at the
              forefront of delivering exceptional.
            </p>
            <button>Read more </button>
          </div>
        </div>
      </div>
      {/*Caring For The Health Of You And Your Family. */}
      <div className=" px-6 py-[40px] ">
        <p className="uppercase text-xl">
          Caring For The Health Of You And Your Family.
        </p>
        <p className="text-5xl font-semibold py-5 w-[900px]">
          We Provide All Aspects Of Medical Practice For Your Whole Family!
        </p>
        <div className="flex flex-row gap-6">
          <div className="w-1/2 py-[50px]">
            <p className="text-xl font-bold">
              Welcome to medipro, where we offer comprehensive medical care
              tailored to every member of your family.
            </p>
            <p className="py-4">
              Our dedicated team of healthcare professionals is committed to
              providing you and your loved ones with personalized and
              compassionate healthcare services. We understand the importance of
              family health.
            </p>
            <div className="flex flex-row gap-3 items-center py-4">
              <RiArrowRightUpBoxFill />
              <p>Family-Centered Care</p>
            </div>
            <div className="flex flex-row gap-3 items-center ">
              <RiArrowRightUpBoxFill />
              <p>Preventive Services</p>
            </div>
            <div className="flex flex-row gap-3 items-center py-4">
              <RiArrowRightUpBoxFill />
              <p>Vaccinations and Immunizations</p>
            </div>

            <div className="py-5">
              <button className="border-2 px-3 py-1 text-xl font-bold  rounded-full">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-200 px-5 py-7 flex flex-row gap-4 my-8">
              <div>
                <BiSolidReport className="text-5xl" />
              </div>

              <div>
                <p className="text-xl font-bold">Patient Information</p>
                <p className="">
                  Patient Information I hereby give consent to and its
                  healthcare professionals to provide medical treatment.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 px-5 py-7 flex flex-row gap-4 my-8">
              <div>
                <BiSolidReport className="text-5xl" />
              </div>

              <div>
                <p className="text-xl font-bold">Emergency Contact</p>
                <p className="">
                  This application form is for informational purposes only and
                  does not guarantee.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 px-5 py-7 flex flex-row gap-4 my-8">
              <div>
                <BiSolidReport className="text-5xl" />
              </div>

              <div>
                <p className="text-xl font-bold">Medical History</p>
                <p className="">
                  Medical History our medical history is a vital piece of
                  information that provides healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment */}
      <div className="relative h-[700px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/12599544/pexels-photo-12599544.jpeg"
          alt="About Us"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay (optional) */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        <div className="relative flex flex-col md:flex-row gap-8 mx-[100px] -mt-[150px] w-[80%]">
          {/* LEFT SIDE - Contact Info */}
          <div className="bg-white rounded-2xl shadow-2xl flex-1 p-8 mt-[400px] ">
            <h2 className="text-xl font-bold uppercase text-[#1C65B3] mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">📍 Location:</p>
                <p className="text-gray-600">123 Main Street, Dhaka</p>
              </div>
              <div>
                <p className="font-semibold">📞 Phone:</p>
                <p className="text-gray-600">+880 123 456 789</p>
              </div>
              <div>
                <p className="font-semibold">✉️ Email:</p>
                <p className="text-gray-600">info@example.com</p>
              </div>
              <div>
                <p className="font-semibold">⏰ Schedule:</p>
                <p className="text-gray-600">Mon - Fri, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Appointment Form */}
          <div className="bg-white rounded-2xl shadow-2xl flex-1 mt-[400px] p-8 ml-[100px]">
            <h2 className="text-xl font-bold uppercase text-[#1C65B3] mb-6">
              Book an Appointment
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C65B3] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C65B3] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C65B3] outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C65B3] outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#1C65B3] text-white py-2 rounded-lg hover:bg-[#15518d] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
