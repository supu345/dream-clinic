import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company A",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote:
      "Soothe made my recovery so much easier. Their team is amazing and supportive!",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote:
      "Highly professional staff. The personalized care plan exceeded my expectations.",
  },
  {
    name: "Michael Johnson",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    quote:
      "I felt safe and supported every step of the way. Truly life-changing experience.",
  },
  {
    name: "Alice Brown",
    role: "Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote:
      "Friendly staff and great facility. The best detox experience I could ask for.",
  },
  {
    name: "David Wilson",
    role: "Entrepreneur",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    quote:
      "Top-notch care, very attentive and professional team. Highly recommended.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length - 2; // Number of "pages" (3 visible per page)

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500">
      <div className="max-w-6xl mx-auto py-16 px-4 relative overflow-hidden  rounded-xl">
        {/* Slider */}
        <div className="text-center py-7 text-3xl">
          <p>Our clients always love us</p>
        </div>
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-lg italic mb-4">"{t.quote}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
