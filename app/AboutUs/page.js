"use client";
import React from "react";

import { Image } from "@chakra-ui/react";
import SectionHeader from "components/Common/SectionHeader";
import { motion } from "framer-motion";
import Cards from "components/Cards";

export default function page() {
  return (
    <section className="backdrop-blur-sm">
      <Image
        src="/test.jpg"
        alt="About Us"
        height={300}
        className="w-screen object-cover mb-3"
      />
      <SectionHeader
        headerInfo={{
          title: "INFORMATION REGARDING ReAct",
          subtitle: "About the ReAct",
          description: "",
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
        <div className="pb-16 ">
          <div className=" mx-10">
            <div className="mb-10">
              <p className="mt-0 text-base md:text-xl md:mx-10 mx-0 mb-10 text-center text-gray-600">
                Refugee Action for Change (ReAct) is a refugee-led advocacy
                group in Malaysia. Established in June 2019, to unify refugee
                leaders and representatives from different nationalities and
                ethnicities to advocate for the recognition of refugee rights in
                Malaysia as a refugee-led effort. ReAct also works to empower
                the community as advocates by providing relevant capacity
                building training and awareness activities.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/about.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <Cards />

            {/* objectives */}
            <section className="py-10 md:mx-10 ">
              <div className=" px-12 md:px-8">
                <div className="animate_top mx-auto text-center">
                  <SectionHeader
                    headerInfo={{
                      title: ``,
                      subtitle: `Objectives`,
                      description: ``,
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
                    <div className="bg-[#272727] p-0 py-10 px-8 md:p-10 text-[#f8cf2c] font-bold rounded-xl border">
                      <div className="flex text-left flex-wrap wrap md:justify-evenly">
                        <div>1. LEADERSHIP EMPOWERMENT</div>
                        <div>2. STRATEGIC INITIATIVES</div>
                        <div>3. COLLABORATIVE SUPPORT</div>
                      </div>
                      <div className="flex flex-wrap wrap md:justify-evenly md:mt-6">
                        <div>4. POLICY ADVOCACY</div>
                        <div>5. RIGHTS ADVOCACY</div>
                        <div>6. PUBLIC SUPPORT</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
            {/* end */}
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              {/* History */}
              <div className="mt-10">
                <h1 className=" text-2xl md:text-3xl ml-0 md:ml-4 text-black font-bold">
                  ReAct History
                </h1>
                <p className="mt-4 md:ml-4 ml-0 ">
                  In 2019, ReAct emerged from a partnership between Tenaganita
                  and Beyond Borders following a consultation event involving
                  refugee leaders, NGO representatives, and government officials
                  from Health and Human Resource Ministries. Despite organising
                  into nine working groups to pursue advocacy objectives, the
                  initiative faced setbacks including undefined member
                  responsibilities, limited commitments, insufficient funds, and
                  poor coordination. However, in 2021 and March 2022, three
                  coordinators underwent capacity-building training to improve
                  effectiveness. With renewed funding in 2023, ReAct relaunched
                  under new leadership.
                </p>
              </div>
            </div>
            {/* Conclusion */}
            <div className="py-3 mt-10 mx-0 md:mx-10 border rounded-2xl bg-[#f8cf2c] ">
              <p className=" mx-2 md:mx-7">
                ReAct, a refugee-led advocacy group in Malaysia, has been
                dedicated to unifying and empowering refugee leaders and
                representatives since its establishment in 2019. Through their
                mission to advocate for refugee rights and their vision of legal
                recognition and access to education, healthcare, and employment,
                ReAct has strategically worked towards improving the lives of
                refugees in Malaysia. Despite challenges faced in the past,
                ReAct has taken steps to strengthen their organization through
                capacity building and leadership training, demonstrating their
                commitment to creating lasting change for the refugee community.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Cards */}
    </section>
  );
}
