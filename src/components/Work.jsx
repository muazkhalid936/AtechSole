import React from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { IoSettingsSharp } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const Work = () => {
  return (
    <div className="p-s ">
      <div className="container py-28 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row">
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-1/2"
              >
                <img src="src\assets\process.jpg" />
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full lg:w-1/2"
              >
                {/* <div className="container lg:mx-5 my-10 flex flex-col text-start justify-center">
                  <div className="flex my-5 gap-10 items-center">
                    <h1 className="text-4xl font-bold">
                      Three Simple Steps To Start Working With
                    </h1>
                  </div>
                  <p>There are three simple steps to make work with us</p>
                  <div>
                    <p>
                      we strive to elevate experiences, foster collaboration,
                      and prioritize the well-being of our users. Embrace the
                      future of education, business, healthcare, and retail,
                      where seamless integration meets unparalleled excellence.
                    </p>
                  </div>
                  <div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>Fully Customizable</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>User Friendly Interface</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>More Effective & Powerfull</p>
                    </div>
                  </div>
                </div> */}
                <div className="max-w-2xl mx-auto p-6">
                  <h1 className="text-start text-4xl font-bold mb-8">
                    Three Simple Steps To Start Working With
                  </h1>
                  <ul className="relative space-y-12">
                    <div className="absolute left-6 top-0 w-px  h-77p-2 lg:h-77p bg-primary"></div>

                    <li className="flex items-start">
                      <div className="bg-primary text-white p-3 flex items-center justify-center rounded-full relative z-10">
                        <span>
                          <IoSettingsSharp className="text-2xl" />
                        </span>
                      </div>

                      <div className="ml-6">
                        <h2 className="text-xl font-semibold">
                          Share Your Idea
                        </h2>
                        <p className="text-gray-700">
                          Share your idea with our developers for which purpose
                          you want to work with us.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="bg-primary text-white p-3 flex items-center  justify-center rounded-full relative z-10">
                        <FaIdCard className="text-2xl" />
                      </div>

                      <div className="ml-6">
                        <h2 className="text-xl font-semibold">
                          Complete your requirements
                        </h2>
                        <p className="text-gray-700">
                          Provide complete details of your business, and then
                          make a deal with developers.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="bg-primary text-white  p-3 flex items-center justify-center rounded-full relative z-10">
                        <TiTick className="text-3xl" />
                      </div>

                      <div className="ml-6">
                        <h2 className="text-xl font-semibold">Start Working</h2>
                        <p className="text-gray-700">
                          After sharing ideas and providing complete
                          requirements, our developers will start working on
                          your project.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default Work;
