import React, { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FaDrawPolygon } from "react-icons/fa";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <div className="p-s flex flex-col lg:flex-row gap-10">
      <div className="flex container flex-col lg:flex-row justify-center gap-10">
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out cursor-pointer p-10 flex flex-col justify-between items-center gap-5 h-full"
          >
            <div className="flex flex-col items-center">
              <BiEdit className="text-8xl" />
              <p className="text-xl my-3 font-semibold text-center">
                Custom Development Solution
              </p>
              <p className="text-center">
                Our developers craft custom software solutions by leveraging cutting-edge technologies like blockchain and AI, to streamline workflow and reliability.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out cursor-pointer p-10 flex flex-col justify-between items-center gap-5 h-full"
          >
            <div className="flex flex-col items-center">
              <BsArrowRepeat className="text-8xl" />
              <p className="text-xl my-3 font-semibold text-center">
                Our Product
              </p>
              <p className="text-center">
                We strive to elevate experiences, foster collaboration, and prioritize the well-being of our users. Embrace the future of education, business, healthcare, and retail, where seamless integration meets unparalleled excellence.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out cursor-pointer p-10 flex flex-col justify-between items-center gap-5 h-full"
          >
            <div className="flex flex-col items-center">
              <FaDrawPolygon className="text-8xl" />
              <p className="text-xl my-3 font-semibold text-center">
                Courses We Offer
              </p>
              <p className="text-center">
                We offer different courses based on programming languages like web development, web designing, app development, Python, SQL, and MERN stack.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
