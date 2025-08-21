import React from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Packages from "../components/Packages";
import Experts from "../components/Experts";
import TestimonialSlider from "../components/TestimonialSlider";
import Blogs from "../components/Blogs";
import Departments from "../components/Departments";
import Tesstimonials from "../components/Tesstimonials";
const Home = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <Hero />
        <Services />
        <AboutUs />
        <Features />
        <Packages />
        <Experts />
        <Tesstimonials />
        {/* <TestimonialSlider /> */}
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
