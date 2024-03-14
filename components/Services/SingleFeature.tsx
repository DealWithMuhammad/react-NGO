// import { Feature } from "../../types/feature";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import Link from "next/link";
import { Feature } from "types/feature";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { imageUrl, subtitle, description } = feature;

  const navigate = useRouter();

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: +20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Card
          className="w-full max-w-96 mx-auto"
          shadow="lg"
          isPressable
          onClick={() => navigate.push(`services/${feature.id}`)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={feature.title}
              className="w-full object-cover h-72 transition-transform transform hover:scale-x-105"
              src={feature.imageUrl}
            />
          </CardBody>
          <CardFooter className="text-small justify-center mt-2 ">
            <b className="transition-colors text-center duration-300 hover:text-[#f8cf2c]">
              {subtitle}
            </b>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default SingleFeature;
