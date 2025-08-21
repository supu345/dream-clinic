import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import logo from "../../assets/logo.png";
import { GiChestnutLeaf } from "react-icons/gi";
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Blogs",
    link: "/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const DropdownLinks = [
  {
    name: "Accident & Emergency",
    link: "/#services",
  },
  {
    name: "Anesthesia and Pain Medicine",
    link: "/#mobile_brands",
  },
  {
    name: "Cancer Care Centre",
    link: "/#location",
  },
  {
    name: "Cancer Care Centre",
    link: "/#location",
  },
  {
    name: "Cancer Care Centre",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <nav className="fixed  top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md dark:text-white dark:bg-black">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
          <div className="container py-[2px] px-[10px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div>
        <div className="container py-3 px-7 sm:py-0">
          <div className="flex flex-row justify-between items-center">
            <div className="flex  items-center gap-2 font-bold text-2xl ">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                {/* <img src={logo} alt="logo" className="h-[70px] w-[70px]" /> */}
                <GiChestnutLeaf className="text-green-700" />
              </Link>
              <p className="text-blue-700">Serenia</p>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((data) => (
                  <li className="py-4" key={data.name}>
                    <NavLink to={data.link} activeClassName="active">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Specialites
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-blue-400 p-2 text-black group-hover:block shadow-md">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <button onClick={toggleDarkMode}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Book Now
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Passing the state to ResponsiveMenu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
