import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 bg-white md:bg-primary items-center flex  justify-between px-12">
      <div>
        <h1 className="md:text-white text-primary font-bold cursor-pointer text-4xl">
          ATechsole
        </h1>
      </div>

      <div className="md:flex gap-5 hidden  font-semibold text-light">
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
          className="text-primary cursor-pointer bg-white rounded-full px-5 py-2"
        >
          Schedule a call
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
