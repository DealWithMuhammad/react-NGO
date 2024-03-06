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
      <section id="features" className="py-20 lg:py-25 bg-[#ededed] xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Projects of ReAct",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 flex flex-wrap justify-center  gap-7.5  xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {sliceServiceData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
