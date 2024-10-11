import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-footer flex flex-col">
      <div className="container-footer py-20 grid md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <div className="text-white text-xl">Address</div>
          <p className="text-footer-text  text-base flex gap-5 items-center">
            <MdLocationPin className="text-4xl" /> 2nd floor Asharfia complex
            muslim town Lahore
          </p>
          <p className="text-footer-text text-base flex gap-5 items-center">
            <FaPhoneAlt className="text-2xl" /> +92-325-3344552
          </p>
          <p className="text-footer-text text-base flex gap-5 items-center">
            <IoMdMail className="text-2xl" />
            info@ATechSole.com
          </p>
        </div>
        <div>
          <div className="text-white text-xl">Quick Link</div>

          <div className="text-footer-text group hover:text-lg hover:text-white duration-500 ease-in-out cursor-pointer hover:underline text-sm flex gap-5 items-center">
            <FaAngleRight className="text-lg group-hover:text-xl" /> About
          </div>
          <div className="text-footer-text text-sm flex gap-5 items-center">
            <FaAngleRight className="text-lg group-hover:underline" /> About
          </div>
          <div className="text-footer-text text-sm flex gap-5 items-center">
            <FaAngleRight className="text-lg" /> About
          </div>
        </div>
        <div>
          <div className="text-white text-xl">Address</div>
          <div className="text-footer-text text-lg flex gap-5 items-center">
            <MdLocationPin /> 2nd floor Asharfia complex muslim town Lahore
          </div>
          <div className="text-footer-text text-lg flex gap-5 items-center">
            <FaPhoneAlt /> +92-325-3344552
          </div>
          <div className="text-footer-text text-lg flex gap-5 items-center">
            <IoMdMail />
            info@ATechSole.com
          </div>
        </div>
        <div>
          <div className="text-white text-xl">Address</div>
          <div className="text-footer-text text-lg flex gap-5 items-center">
            <MdLocationPin /> 2nd floor Asharfia complex muslim town Lahore
          </div>
          <div className="text-footer-text text-lg flex gap-5 items-center">
            <FaPhoneAlt /> +92-325-3344552
          </div>
          <div className="text-footer-text text-lg flex gap-5 items-center">
            <IoMdMail />
            info@ATechSole.com
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
      </div>
    </div>
  );
};

export default Footer;
