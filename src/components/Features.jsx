import React from "react";
import FeatureCard from "./FeatureCard";
import { FaLaptopCode } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

import { BsArrowRepeat } from "react-icons/bs";
import { FaDrawPolygon } from "react-icons/fa";
const Features = () => {
  return (
    <div className="flex justify-center   my-40">
      <div className="flex container  flex-col justify-center items-center">
        <div className="text-4xl font-bold text-center">Advance Features</div>
        <p className="lg:w-1/2 my-10 text-center">
          Unravel the power of our Next-Gen IT services in the favor of your
          exclusive business mission.
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <FeatureCard Icon={BiEdit} detail="We offer our Clients to make customization opportunity anytime, Whenever he wants." heading="Fully Customizable" />
          <FeatureCard Icon={BsArrowRepeat} detail="enabling independently designed applications to work together." heading="App Integration" />
          <FeatureCard detail="We develop apps and Websites with high Resolution." Icon={FaLaptopCode} heading="High Resolution" />
          <FeatureCard  Icon={FaDrawPolygon} detail="We offer our clients to make consultancy 24/7." heading="24/7 Consultancy" />
        </div>
      </div>
    </div>
  );
};

export default Features;
