import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-back pt-10 flex px-12 bg-primary h-[100vh]">
      <div className="flex flex-col justify-center">
        <p className="text-3xl text-white font-bold text-center">
          Decode Complexities With Our Enterprise Services
        </p>
        <p>
          We build, repair, and manage enterprise software development, security
          opterations, and data-base infrastructure to bring seamless efficiency
          to table
        </p>
        <div>
          <input /> <Link to={"#"}>Explore Your Solution</Link>
        </div>
      </div>

      <div>
        <img className="rounded-lg" src="src\assets\hero.jpg" />
      </div>
    </div>
  );
};

export default Hero;
