"use client";

import { useState, useEffect } from "react";
import SingleFeature from "./SingleFeature";
import SectionHeader from "components/Common/SectionHeader";
import { getService } from "api/functions/get";
import { Spinner } from "@nextui-org/react";
import { Flex } from "@mantine/core";

const Services = ({ all }) => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedServiceData = await getService();
        setService(fetchedServiceData);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch data on initial render only

  if (loading) {
    return (
      <Flex height="20vh" align="center" justify="center">
        <Spinner size="xl" color="#f8cf2c" />
      </Flex>
    );
  }
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 bg-[#ededed] xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Projects of ReAct",
              description: `Explore projects of ReAct`,
            }}
          />
          {/* <!-- Section Title End --> */}

          {loading ? (
            <Spinner size="xl" color="default" />
          ) : (
            <div className="mt-12.5 flex flex-wrap justify-center gap-7.5 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {service.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
          )}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
