import React, { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/5215007/pexels-photo-5215007.jpeg",
      title: "Healing with Heart",
      description:
        "We combine advanced medical technology with compassion, ensuring every patient receives personalized treatment, comfort, and support for a healthier, happier life.",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg",
      title: "Emergency Care, Anytime",
      description:
        "Our 24/7 emergency services are equipped with modern facilities and experienced doctors, ready to provide immediate, life-saving care when every second truly matters..",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/6129237/pexels-photo-6129237.jpeg",
      title: "Your Health, Our Priority",
      description:
        "Dedicated to complete wellness, we offer expert medical guidance, advanced treatments, and compassionate care, helping you and your loved ones achieve long-term health.",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/4006979/pexels-photo-4006979.jpeg",
      title: "Specialists You Can Trust",
      description:
        "Our team of highly skilled doctors and nurses provide expert care across specialties, ensuring patients receive reliable treatment, guidance, and support throughout their recovery.",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg",
      title: "Advanced Diagnostics, Faster Results",
      description:
        "With modern imaging and laboratory facilities, we ensure accurate testing and timely results, helping patients begin the right treatment without unnecessary delays or worries.",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg",
      title: "Comfort Beyond Treatment",
      description:
        "Our hospital provides a healing environment with modern rooms, patient-focused services, and compassionate support, making every stay safe, comfortable, and stress-free for families.",
    },
    {
      id: 7,

      image:
        "https://images.pexels.com/photos/5215001/pexels-photo-5215001.jpeg",
      title: "Caring for the Community",
      description:
        "Beyond treatment, we promote wellness through preventive check-ups, health awareness programs, and community initiatives, ensuring healthier lives for families today and tomorrow.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="">
      <div className="relative max-w-7xl w-full mx-auto group ">
        {/* Slider */}
        <div className="relative h-[550px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-opacity duration-700 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 flex items-center justify-start bg-black/40 p-16">
                <div className="text-left max-w-xl">
                  <h2 className="text-white text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-200 text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-11 h-11 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-11 h-11 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        >
          &rarr;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-2 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
