import { Image } from "@chakra-ui/react";
import SectionHeader from "components/Common/SectionHeader";
import FunFact from "components/FunFact";

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
          description: "DETAILS ABOUT THE ReAct",
        }}
      />
      <div className="py-16 mx-10 ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <Image
                src="/about.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                ABOUT ReAct ORGANIZATION
              </h2>
              <p className="mt-6 text-gray-600">
                Refugee Action for Change (ReAct) is a refugee-led advocacy
                group in Malaysia. Established in June 2019,to unify refugee
                leaders and representatives from different nationalities and
                ethnicities to advocate for the recognition of refugee rights in
                Malaysia as a refugee-led effort.
                <br />
                ReAct also works to empower the community as advocates by
                providing relevant capacity building training and awareness
                activities.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl text-center text-gray-900 font-bold md:text-4xl">
              WHO ARE THE{" "}
              <span className="text-[#f8cf2c]"> ReAct COORDINATORS? </span>
            </h2>
            <p className="mt-6 text-gray-600"></p>
          </div>
        </div>
      </div>
      <FunFact />
    </section>
  );
}
