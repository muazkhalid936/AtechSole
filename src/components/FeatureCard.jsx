import React from "react";
import { motion } from "framer-motion";
const FeatureCard = ({ Icon, heading, detail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="bg-white shadow-lg  rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out hover:-translate-y-4 md:w-1/2 lg:w-1/4 cursor-pointer group flex flex-col justify-center items-center py-5 gap-2"
    >
      <div className="flex flex-col justify-center px-2 py-10 items-center">
        <Icon className="text-6xl duration-500 ease-in-out group-hover:text-white text-blue-500" />
        <p className="text-xl my-3 font-semibold text-center">{heading}</p>
        <p className="text-center">{detail}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
