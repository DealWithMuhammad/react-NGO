import { Image } from "@chakra-ui/react";
import SectionHeader from "components/Common/SectionHeader";

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
                BAIG ASSOCIATES is a leading design, construction, development,
                and real estate management (sales and marketing) firm
                exclusively operating in DHA Islamabad. Based in Islamabad,
                Pakistan, we specialize in providing unparalleled commercial
                projects and designer villas to our customers in the Twin
                Cities. Our focus is on delivering properties that seamlessly
                blend comfort, style, and functionality. With a commitment to
                excellence, we offer nationwide services encompassing top-tier
                architectural services and plans, interior designs, commercial
                designs, and cutting-edge construction. At BAIG ASSOCIATES, we
                channel our ideas and resources to craft masterpieces, turning
                your dream residential and commercial projects into reality.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              COMPANY OVERVIEW
            </h2>
            <p className="mt-6 text-gray-600">
              BAIG ASSOCIATES was the brainchild of Chairman Muhammad Rehan Baig
              whose idea was later materialized by CEO Muhammad Rehan Baig.
              Despite having a successful career in Engineering, the CEO set out
              to realize his vision of creating designer villas, residential
              projects and commercial projects. The company focuses on catering
              to the needs of its customers by creating artistic designs.
              Therefore, BAIG ASSOCIATES is the only development company that
              has its own separate residential and commercial design wings. Our
              company comprises of teams that fully comprehend the need of time
              and desires of the customers, which is, reflected in our
              state-of-the-art projects. BAIG ASSOCIATES diversifies its
              residential projects with elements such as greenery and
              plantation, natural light, spacious areas, security, commutability
              and accessibility. Our commercial projects are characterized by
              wide spaces, front elevation, and facades as well as
              cost-effective construction. The practicality of these commercial
              designs is what stands out the most as 3D elevations are perfect
              for onsite execution. The innovation in BAIG ASSOCIATES designs
              does not affect the floor area ratio of the buildings. Customers
              benefit significantly from the revenue maximization per square
              feet. As one of the major leading development companies, BAIG
              ASSOCIATES goes above and beyond for you. We stay committed from
              the start of the planning process to the end, delivering you
              extraordinary results. We provide exceptional service, exceptional
              design and exceptional property. Moreover, we offer property
              management and end-to-end real estate services covering bulk
              lands, residential and commercial plots, industrial areas, housing
              and residential services concerning purchase, sale, lease and
              appraisal for all Pakistanis inside and outside Pakistan and to
              all foreigners. We make sure that all the undertakings take place
              through the legitimate process with compliance with laws, rules
              and regulations for safe and fair dealings.
            </p>
            <h2 className="text-2xl mt-10 text-gray-900 font-bold md:text-4xl">
              VISION AND MISSION
            </h2>
            <p className="mt-6 text-gray-600">
              Our vision is a modern concept of living, nothing short of
              perfection. We create masterpieces that are an embodiment of
              form-follows-function in our residential and commercial projects.
              We provide customers with true value for their money in the form
              of unparalleled functionality and quality. Our mission is design,
              constructions, development ventures in Pakistan by establishing
              ourselves as a one-stop solution for all construction, design, and
              development-related services. We aim to establish our selling and
              development wings, which would cover more ground and accommodate
              the needs and wishes of our customers better than ever before.
              BAIG ASSOCIATES is a pioneering design, construction, development
              and real estate management (sales and marketing) company based in
              Islamabad, Pakistan. BAIG ASSOCIATES, as a major development
              company provides its customers in the Twin cities with exquisite
              commercial projects and designer villas that combine comfort,
              style, and functionality like never offered before. Our nationwide
              services include top-notch architectural services and plans,
              interior designs, commercial designs as well as state-of-the-art
              construction. We mobilize our ideas and resources into creating
              masterpieces. We make your dream residential and commercial
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
