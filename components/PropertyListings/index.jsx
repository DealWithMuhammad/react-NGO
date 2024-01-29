"use client";

import { SimpleGrid } from "@mantine/core";
import "react-awesome-slider/dist/styles.css";
import SectionHeader from "../Common/SectionHeader";
import SingleListing from "./SingleListing";
import KnowMore from "../Common/KnowMore";
import { useEffect, useState } from "react";
import { getBlogs } from "api/functions/get";
import { Flex } from "@chakra-ui/react";
import { Spinner } from "@nextui-org/react";

export default function CarouselCard({ all }) {
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogData = await getBlogs();
      setPropertiesData(
        fetchedBlogData.filter((blog) => blog.category === "PROJECTS")
      );
      setLoading(false)
    };

    fetchData();
  }, [all]);

  const slicedPropertiesData = all
    === true ? propertiesData :
    propertiesData.slice(0, 3)

  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <SectionHeader
          headerInfo={{
            title: "Explore Our Services",
            subtitle: "Turning Your Vision into Reality",
            description:
              "Discover a wide array of reliable architectural and construction services aimed at transforming your concepts into tangible, quality-built spaces.",
          }}
        />
        <p className="h-14 ml-6">...</p>
        {loading ? ( // Show loader if loading is true
          <Flex height="20vh" align="center" justify="center">
            <Spinner size="xl" color="default" />
          </Flex>
        ) : (
          <SimpleGrid cols={{ base: 1, sm: 3 }}>
            {slicedPropertiesData.map((item, index) => {
              return <SingleListing key={index} item={item} />;
            })}
          </SimpleGrid>
        )}
        {/* Hide the "Know More" button if 'all' is false */}
        {all === false && <KnowMore link={"Projects"} />}
      </div>
    </section>
  );
}
