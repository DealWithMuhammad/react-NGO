import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import Link from "next/link";
import { Image } from "@nextui-org/react";

const SingleFeature = ({ feature }) => {
  const { title, href, details, icon } = feature;

  const truncateText = (text, maxLength) => {
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
        className="animate_top z-40 rounded-lg border border-white bg-[#6f1d1b] p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#49111c] text-white text-4xl">
          {icon}
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-white xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-white h-[15rem]">{truncateText(details, 320)}</p>
        <br />
        <Link href={href}>
          <Button bg={"#fff"} c={"#000"}>
            Learn More
          </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default SingleFeature;
