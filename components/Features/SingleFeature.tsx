import React from "react";
import { Feature } from "../../types/feature";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon: Icon, title, description, href } = feature; // Destructure icon as Icon

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
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 lg:w-[28%]  transition-all hover:shadow-solid-4 "
      >
        <div className="relative text-white flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#f8cf2c]">
          <Icon size={36} /> {/* Render the icon component directly */}
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
        <br />
        <Link href={href}>
          <Button bg={"#f8cf2c"} c={"#000"}>
            Learn More
          </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default SingleFeature;
