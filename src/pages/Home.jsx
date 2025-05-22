import React from "react";
import Services from "../components/Service";
import Offers from "../components/Offers";
import Features from "../components/Features";
import AdvanceFeature from "../components/AdvanceFeature";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
      <div className="home">
        <Offers />
        <Features />
        <AdvanceFeature />
        <Work />
      </div>
    </>
  );
};

export default Home;
