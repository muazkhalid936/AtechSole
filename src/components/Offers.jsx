import React, { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FaDrawPolygon } from "react-icons/fa";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <div className="mx-5 sm:mx-20 md:mx-16 lg:mx-20 my-20 flex flex-col lg:flex-row gap-10 ">
      <div className="flex flex-col lg:flex-row justify-center gap-10">
     <div className="hover:-translate-y-4 duration-500 ease-in-out w-full lg:w-1/3">
     <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out hover:-translate-y-4 cursor-pointer p-10 flex flex-col justify-center items-center gap-5"
        >
          <div>
            <BiEdit className="text-8xl" />
            <p className="text-xl my-3 font-semibold text-center">
              Custom Development Solution
            </p>
            <p className="text-center">
              Our developers craft custom software solutions by leveraging Our
              developers craft custom software solutions by leveraging
              cutting-edge technologies, like blockchain and AI, to streamline
              workflow and reliability.
            </p>
          </div>
        </motion.div>

     </div>
   
     <div className="hover:-translate-y-4 duration-500 ease-in-out w-full lg:w-1/3">
     <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out hover:-translate-y-4 cursor-pointer p-10 flex flex-col justify-center items-center gap-5"
        >
          <div>
            <BiEdit className="text-8xl" />
            <p className="text-xl my-3 font-semibold text-center">
              Custom Development Solution
            </p>
            <p className="text-center">
              Our developers craft custom software solutions by leveraging Our
              developers craft custom software solutions by leveraging
              cutting-edge technologies, like blockchain and AI, to streamline
              workflow and reliability.
            </p>
          </div>
        </motion.div>

     </div>
   
     <div className="hover:-translate-y-4 duration-500 ease-in-out w-full lg:w-1/3">
     <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out hover:-translate-y-4 cursor-pointer p-10 flex flex-col justify-center items-center gap-5"
        >
          <div>
            <BiEdit className="text-8xl" />
            <p className="text-xl my-3 font-semibold text-center">
              Custom Development Solution
            </p>
            <p className="text-center">
              Our developers craft custom software solutions by leveraging Our
              developers craft custom software solutions by leveraging
              cutting-edge technologies, like blockchain and AI, to streamline
              workflow and reliability.
            </p>
          </div>
        </motion.div>

     </div>
   
  
 
      
      </div>
    </div>
  );
};

export default Offers;
