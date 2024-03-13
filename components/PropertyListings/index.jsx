"use client";

import { SimpleGrid } from "@mantine/core";
import "react-awesome-slider/dist/styles.css";
import SectionHeader from "../Common/SectionHeader";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function CarouselCard({ all }) {
  // const [propertiesData, setPropertiesData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedBlogData = await getBlogs();
  //     setPropertiesData(
  //       fetchedBlogData.filter((blog) => blog.category === "PROJECTS")
  //     );
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [all]);

  // const slicedPropertiesData =
  //   all === true ? propertiesData : propertiesData.slice(0, 3);

  return (
    <section id="features" className="py-10 ">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <SectionHeader
          headerInfo={{
            title: "Foreword",
            subtitle: "Introduction to ReAct",
            description:
              "A collective for change, driven by refugees: ReAct - empowering voices.",
          }}
        />
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
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
          className="animate_top mx-auto"
        >
          <div className="space-y-6 mt-10 mx-10 md:space-y-0  animate_top  md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <Image
                borderRadius={"200px 0px 200px 0px"}
                src="/team.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-[#f8cf2c] font-bold md:text-4xl">
                Uniting voices. Advocating for refugee rights
              </h2>
              <p className="mt-6 text-gray-600">
                Refugee Action for Change (ReAct) is a refugee-led advocacy
                group in Malaysia. Established in June 2019, to unify refugee
                leaders and representatives from different nationalities and
                ethnicities to advocate for the recognition of refugee rights in
                Malaysia as a refugee-led effort.
              </p>
              <p className="mt-6 text-gray-600">
                ReAct also works to empower the community as advocates by
                providing relevant capacity building training and
                awareness activities.
              </p>
              <a className="text-blue-500 hover:underline" href="/about">
                Read More.
              </a>
            </div>
          </div>
          {/* {loading ? ( // Show loader if loading is true
          <Flex height="20vh" align="center" justify="center">
            <Spinner size="xl" color="default" />
          </Flex>
        ) : (
          <SimpleGrid cols={{ base: 1, sm: 3 }}>
            {slicedPropertiesData.map((item, index) => {
              return <SingleListing key={index} item={item} />;
            })}
          </SimpleGrid>
        )} */}
          {/* Hide the "Know More" button if 'all' is false */}
          {/* {all === false && <KnowMore link={"Projects"} />} */}
        </motion.div>
      </div>
    </section>
  );
}
