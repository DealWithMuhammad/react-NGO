import { Image } from "@chakra-ui/react";
import Cards from "components/Cards";
import SectionHeader from "components/Common/SectionHeader";
import FunFact from "components/FunFact";
import Services from "components/Services";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import Members from "components/Members";

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
      <div className="pb-16 mx-10 ">
        <div className="mb-10">
          <p className="mt-0 text-base md:text-2xl mb-10 text-center text-gray-600">
            Refugee Action for Change (ReAct) is a refugee-led advocacy group in
            Malaysia. Established in June 2019, to unify refugee leaders and
            representatives from different nationalities and ethnicities to
            advocate for the recognition of refugee rights in Malaysia as a
            refugee-led effort. ReAct also works to empower the community as
            advocates by providing relevant capacity building training and
            awareness activities.
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

        <Members />
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          {/* History */}
          <div className="mt-10">
            <h1 className=" text-2xl md:text-3xl ml-0 md:ml-4 text-black font-bold">
              ReAct History
            </h1>
            <p className="mt-4 md:ml-4 ml-0 ">
              In 2019, ReAct emerged from a partnership between Tenaganita and
              Beyond Borders following a consultation event involving refugee
              leaders, NGO representatives, and government officials from Health
              and Human Resource Ministries. Despite organising into nine
              working groups to pursue advocacy objectives, the initiative faced
              setbacks including undefined member responsibilities, limited
              commitments, insufficient funds, and poor coordination. However,
              in 2021 and March 2022, three coordinators underwent
              capacity-building training to improve effectiveness. With renewed
              funding in 2023, ReAct relaunched under new leadership.
            </p>
          </div>

          {/* Conclusion */}
          <p className="mt-7 ml-0 md:ml-10">
            ReAct, a refugee-led advocacy group in Malaysia, has been dedicated
            to unifying and empowering refugee leaders and representatives since
            its establishment in 2019. Through their mission to advocate for
            refugee rights and their vision of legal recognition and access to
            education, healthcare, and employment, ReAct has strategically
            worked towards improving the lives of refugees in Malaysia. Despite
            challenges faced in the past, ReAct has taken steps to strengthen
            their organization through capacity building and leadership
            training, demonstrating their commitment to creating lasting change
            for the refugee community.
          </p>
        </div>
      </div>

      {/* Cards */}
    </section>
  );
}
