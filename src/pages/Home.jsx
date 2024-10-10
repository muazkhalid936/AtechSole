import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Offers from "../components/Offers";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
    <div className="home">

      <Hero />
      <Offers />
      <Features />
    </div>
    </>
  );
};

export default Home;
