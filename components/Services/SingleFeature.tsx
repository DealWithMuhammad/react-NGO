// import { Feature } from "../../types/feature";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import Link from "next/link";
import { Feature } from "types/feature";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { imageUrl, title, description } = feature;

  const navigate = useRouter();

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
          <Image
            src={feature.imageUrl}
            alt={"Room"}
            loading="eager"
            radius={"lg"}
            height={"100px"}
            width={"100px"}
          />{" "}
          {/* Render the icon component directly */}
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
        <br />
        <div onClick={() => navigate.push(`services/${feature.id}`)}>
          <Button bg={"#f8cf2c"} c={"#000"}>
            Learn More
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
