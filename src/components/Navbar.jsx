import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    if (currentScrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-5 items-center flex justify-between px-12 fixed w-full transition-all duration-500 z-50 ${
        isScrolled ? "bg-white" : "md:bg-transparent bg-white"
      } ${isVisible ? "top-0" : "-top-20"}`}
    >
      <div>
        <h1
          className={` font-bold cursor-pointer text-4xl ${
            isScrolled ? "text-primary" : "md:text-white text-primary"
          } `}
        >
          ATechsole
        </h1>
      </div>

      <div
        className={`md:flex gap-5 hidden font-semibold ${
          isScrolled ? "text-black" : "text-light"
        }`}
      >
        <Link to={"/"} className="cursor-pointer">
          Home
        </Link>
        <Link to={"/About"} className="cursor-pointer">
          About
        </Link>
        <Link to={"/Services"} className="cursor-pointer">
          Services
        </Link>
        <Link to={"/Contact"} className="cursor-pointer">
          Contact
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link
          to={"/Call"}
          className={`cursor-pointer rounded-full px-5 py-2 ${
            isScrolled ? "bg-primary text-white" : "bg-white text-primary"
          }`}
        >
          Schedule a call
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
