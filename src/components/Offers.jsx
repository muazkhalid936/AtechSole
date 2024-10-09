import React from "react";
import { BiEdit } from "react-icons/bi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 300 },
  visible: (i) => ({
    y: 0, 
    transition: {
      delay: i * 0.2, 
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

const Offers = () => {
  const offers = [
    {
      title: "Custom Development Solution",
      description:
        "Our developers craft custom software solutions by leveraging cutting-edge technologies, like blockchain and AI, to streamline workflow and reliability.",
    },
    {
      title: "Our Products",
      description:
        "We strive to elevate experiences, foster collaboration, and prioritize the well-being of our users. Embrace the future of education, business, healthcare, and retail, where seamless integration meets unparalleled excellence.",
    },
    {
      title: "Courses We Offer",
      description:
        "We offer differnet courses which are based on programming languange. like web-development, web-designing, App-development, Phython, SQL, MERNSTACK.",
    },
  ];

  return (
    <div className="px-12 gap-10 flex-col lg:flex-row mt-20 flex justify-center">
      {offers.map((offer, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden" // Start below
          whileInView="visible" // Animate to final position when in view
          viewport={{ once: false, amount: 0.1 }} // Trigger when 20% is in view
          variants={cardVariants}
          className="flex hover:text-white hover:bg-primary duration-700 ease-in-out justify-center gap-5 flex-col items-center bg-light p-12 hover:-translate-y-4 transition-transform transform"
        >
          <BiEdit className="text-6xl" />
          <p className="font-semibold text-center text-2xl">{offer.title}</p>
          <p className="text-center">{offer.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Offers;
