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
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 lg:py-2 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark "
      >
        {/* <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-black"> */}
        {/* <Image src={icon} width={36} height={36} alt="title" /> */}
        <h1 className="text-white">{id}</h1>
        {/* </div> */}
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-[#f8cf2c] dark:text-white xl:text-itemtitle">
          <span className="font-bold text-[#000]">{id}:</span> {title}
        </h3>
        <p>{truncateText(description, 350)}</p>
        <Link
          href={"#"}
          // href={href}
        >
          <Button bg="#f8cf2c" className="mt-6 bg-[#f8cf2c]">
            <span className="text-[#252827]">Learn More</span>
          </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default SingleFeature;
