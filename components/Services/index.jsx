"use client";

import { Container } from "@mantine/core";
import ServiceData from "./servicesData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "components/Common/SectionHeader";

const Services = ({ all }) => {
  const sliceServiceData = all ? ServiceData : ServiceData.slice(0, 3);

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <Container size={"lg"} id="services">
        <div>
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Projects",
              subtitle: "Building Your Dream Space, from Vision to Reality",
              description:
                "We offer a comprehensive range of architectural and construction services to bring your ideas to life.",
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {sliceServiceData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </Container>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
