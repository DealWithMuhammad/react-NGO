"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import KnowMore from "components/Common/KnowMore";
import { getBlogs } from "api/functions/get";
import { Flex } from "@chakra-ui/react";
import { Spinner } from "@nextui-org/react";

const Members = ({ all, selectedCategory }) => {
  const list = [
    {
      title: "Dafir",
      img: "https://www.wrschool.org/wp-content/uploads/2017/03/Kirk-Chamberlain.png",
      price: "Board Chairman",
    },

    {
      title: "Deborah",
      img: "https://www.wrschool.org/wp-content/uploads/2018/01/Anthony-J.-Cernera-Ph.D..png",
      price: "Board Member",
    },
    {
      title: "Nacima",
      img: "https://www.wrschool.org/wp-content/uploads/2018/01/Liz-Cole.png",
      price: "Board Founder",
    },
    {
      title: "Hameed",
      img: "https://www.wrschool.org/wp-content/uploads/2020/03/Eng.-Reda-Islam.png",
      price: "Board Member",
    },
    {
      title: "Ahmed",
      img: "https://www.wrschool.org/wp-content/uploads/2018/01/Nolan-Bushnell.png",
      price: "Board Member",
    },
  ];

  return (
    <section className="py-10 mx-10 ">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `ReAct Board Members`,
              subtitle: `ReAct Board Members`,
              description: ``,
            }}
          />
        </div>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card
            className="mt-10"
            shadow="sm"
            key={index}
            radius="none"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                width="100%"
                radius="none"
                alt={item.title}
                className="w-full object-cover border-0 h-[240px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-md justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Members;
