import React from "react";
import { Feature } from "types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, id, title, description, href } = feature;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40  bg-[#272727] pl-4 py-7.5 lg:py-2  "
      >
        {/* <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-black"> */}
        {/* <Image src={icon} width={36} height={36} alt="title" /> */}
        {/* <h1 className="text-white">{id}</h1> */}
        {/* </div> */}
        <h3 className="mb-5 mt-7.5 text-xl md:text-xl font-semibold text-[#f8cf2c] ">
          <span className="font-bold text-[#fff]">{id}:</span> {title}
        </h3>
     
      </motion.div>
    </>
  );
};

export default SingleFeature;
