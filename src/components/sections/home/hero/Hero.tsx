import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../../styledComponents";
import { v4 as uuidv4 } from "uuid";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "100%" },
    show: { opacity: 1, y: "0%" },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col flex-shrink-0 all-child:hlg:text-center gap-8 hlg:items-center hlg:justify-center "
    >
      <motion.p variants={item} className="font-bold leading-snug text-step0">
        Discover, collect, and <br /> sell the best{" "}
        <span className="text-main">NFT art</span>
      </motion.p>

      <motion.p variants={item} className="inline text-b1 text-colection-600">
        ASICS NFT is the world's first and largest NFT marketplace
      </motion.p>
      <motion.div
        variants={item}
        className="flex gap-5 hsm:w-full hmd:w-9/12 hmd:flex-col w-fit hlg:mx-auto"
      >
        <PrimaryButton buttonType="contained">explore</PrimaryButton>
        <PrimaryButton buttonType="outlined">Create</PrimaryButton>
      </motion.div>
      <motion.div
        variants={item}
        style={{
          background:
            "linear-gradient(94.51deg, #1B1B1B -14.5%, rgba(27, 27, 27, 0) 118.65%)",
        }}
        className="flex w-fit rounded-[2rem] hmd:w-full hmd:justify-between py-4 mt-6"
      >
        {infoItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center relative gap-5 h-fit font-bold flex-col w-full leading-none hmd:px-0 px-8 after:content-[''] after:top-1/2 after:-translate-y-1/2 not-last:after:w-[2px] after:absolute after:right-0 after:h-[60px] after:bg-colection-1000 "
          >
            <p
              style={{ fontFamily: "Raleway" }}
              className="text-h2 hsm:text-h3 text-main "
            >
              {item.amount}
            </p>
            <p className="text-b2 ">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hero;

interface InfoItem {
  id: string;
  title: string;
  amount: string;
}

export const infoItems: InfoItem[] = [
  { id: uuidv4(), title: "Artwork", amount: "30K" },
  { id: uuidv4(), title: "Auction", amount: "26K" },
  { id: uuidv4(), title: "Artist", amount: "19K" },
];
