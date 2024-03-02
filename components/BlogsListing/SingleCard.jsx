"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function SingleCard({ item }) {
  const navigate = useRouter();

  return (
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
        onPress={() => navigate.push(`projects/${item.id}`)}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.title}
            className="w-full object-cover h-72 transition-transform transform hover:scale-x-105"
            src={item.imageUrl}
          />
        </CardBody>
        <CardFooter className="text-small justify-between mt-2">
          <b>{item.title}</b>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
