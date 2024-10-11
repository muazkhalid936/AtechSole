import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-footer flex flex-col">
      <div className="container gap-10 footer-s grid md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <div className="text-white text-xl">Address</div>
          <p className="text-footer-text  text-base flex gap-5 items-center">
            <MdLocationPin className="text-xl" /> 2nd floor Asharfia complex
            muslim town Lahore
          </p>
          <p className="text-footer-text text-base flex gap-5 items-center">
            <FaPhoneAlt className="text-xl" /> +92-325-3344552
          </p>
          <p className="text-footer-text text-base flex gap-5 items-center">
            <IoMdMail className="text-xl" />
            info@ATechSole.com
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-white text-xl">Quick Link</div>

          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white cursor-pointer hover:underline items-center text-footer-text">
            <FaAngleRight /> About
          </p>
          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-center text-footer-text">
            <FaAngleRight /> Contact
          </p>
          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-center text-footer-text">
            <FaAngleRight /> Privacy Policy
          </p>
          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline items-center cursor-pointer text-footer-text">
            <FaAngleRight /> Terms & COnditions
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-white text-xl">Industries</div>

          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white cursor-pointer hover:underline items-center text-footer-text">
            <FaAngleRight /> Education
          </p>
          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-center text-footer-text">
            <FaAngleRight /> Businesses
          </p>
          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-center text-footer-text">
            <FaAngleRight /> Health
          </p>
          <p className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline items-center cursor-pointer text-footer-text">
            <FaAngleRight /> Retail
          </p>
        </div>

        <div className="h-full flex flex-col justify-between">
          <div className="text-white text-xl">Newsletter</div>
          <p className="text-footer-text text-base my-5 md:my-0 text-justify">
            We are going to launch a new education system Website. For More
            Details Emial us
          </p>

          <div className=" relative flex overflow-hidden ">
            <input
              placeholder="Your Email"
              className="pl-5 outline-none w-full rounded-full h-12"
            ></input>
            <div className="absolute end-5 top-3">
              <GrSend className="text-2xl text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr  className="border-footer-text"/>

        <div class="py-5">
          <div class="flex justify-between">
            <div class="w-full lg:w-1/2 text-center  mb-3">
              ©{" "}
              <a class="text-white underline" href="https://ATechSole.com">
                ATechSole
              </a>
              , All Right Reserved. Designed By{" "}
              <a class="text-white underline" href="https://ATechSole.com">
                ATechSole
              </a>
            </div>
            <div class=" w-full lg:w-1/2 text-center ">
              <div class=" text-white flex justify-center gap-10">
                <a href="/" className="hover:text-footer-text hover:underline">Home</a>
                <a href="" className="hover:text-footer-text hover:underline">Cookies</a>
                <a href="" className="hover:text-footer-text hover:underline">Help</a>
                <a className="hover:text-footer-text hover:underline" href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
