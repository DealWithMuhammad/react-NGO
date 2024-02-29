"use client";
import React from "react";
import featuresData from "./servicesData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Index = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className=" py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Objectives",
              subtitle: "Our Objectives",
              description:
                "",
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-2 mx-10 grid rounded-lg border border-white shadow-solid-3 transition-all hover:shadow-solid-4-strokedark bg-[#272727] grid-cols-1 gap-7.5 md:grid-cols-2  lg:grid-cols-3  xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
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

export default Index;
