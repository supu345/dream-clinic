import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const blogs = [
  {
    title: "The Future of Heart Care: Modern Cardiology Treatments",
    description:
      "Discover how advanced technologies like minimally invasive surgery and AI-driven diagnostics are transforming heart care, ensuring faster recovery and healthier lives for patients worldwide.",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    title: "Boosting Immunity: Everyday Habits for a Stronger Body",
    description:
      "Learn simple lifestyle tips, from nutrition to sleep, that help strengthen your immune system naturally and keep common infections and seasonal illnesses at bay.",
    image: "https://images.pexels.com/photos/3757944/pexels-photo-3757944.jpeg",
  },
  {
    title: "Child Health Matters: Pediatric Care Every Parent Should Know",
    description:
      "A practical guide for parents covering vaccination, nutrition, and early warning signs to ensure children grow up healthy, strong, and full of energy.",
    image: "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg",
  },
];

const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <p className="text-xl font-bold text-start mb-10 uppercase text-blue-700">
        Our Blog
      </p>
      <p className="text-5xl font-bold text-start mb-10 ">
        Lates News & Articles.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex-1"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transform transition duration-500 ease-in-out hover:scale-110"
            />
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button className="mt-auto flex items-center gap-1 font-bold text-start py-2 rounded-lg hover:text-blue-600 transition">
                Read More <IoIosArrowRoundForward className="text-xl mt-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
