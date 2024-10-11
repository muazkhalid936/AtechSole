import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-footer flex flex-col">
      <div className="container py-20 grid md:grid-cols-2 lg:grid-cols-4">
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
        <hr />asd
      </div>
    </div>
  );
};

export default Footer;
