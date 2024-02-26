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
          description: "",
        }}
      />
      <div className="py-16 mx-10 ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6  lg:gap-12">
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
              <p className="mt-0 text-gray-600">
                Refugee Action for Change (ReAct) is a refugee-led advocacy
                group in Malaysia. Established in June 2019, to unify refugee
                leaders and representatives from different nationalities and
                ethnicities to advocate for the recognition of refugee rights in
                Malaysia as a refugee-led effort.
              </p>
              <p className="mt-2 text-gray-600">
                ReAct also works to empower the community as advocates by
                providing relevant capacity building training and
                awareness activities.
              </p>
              <p className="font-bold mt-6">Mission</p>
              <p>
                To advocate for the realisation of refugee rights in Malaysia,
                specifically in their right to work, right to education and
                right to healthcare.
              </p>
              <p className="font-bold mt-6">Vision</p>
              <p>
                The legal recognition of all refugees in Malaysia; and their
                right to employment, right to accessible education and right to
                affordable and quality healthcare, regardless of their age,
                gender, nationality, ethnicity and religion.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl text-black ml-4 font-bold">Objectives</h1>
            <div className="ml-8 mt-3">
              <ul className="list-decimal mx-10">
                <li>
                  Empower refugee leaders with advocacy skills and knowledge for
                  effective community representation.
                </li>
                <li>
                  Facilitate refugee engagement in advocating for their rights
                  and protection.
                </li>
                <li>
                  Foster collaboration among refugee groups and community-based
                  organizations to collectively support refugee rights.
                </li>
                <li>
                  Advocate for policy and legal changes to ensure refugees in
                  Malaysia have access to jobs, education, and affordable
                  healthcare.
                </li>
                <li>
                  Strategically plan and execute initiatives to improve refugee
                  rights and safety.
                </li>
                <li>
                  Increase local public support for refugees to enhance their
                  rights and protection in Malaysia.
                </li>
              </ul>
            </div>
          </div>
          {/* History */}
          <div className="mt-10">
            <h1 className="text-4xl ml-4 text-black font-bold">
              ReAct History
            </h1>
            {/* 2019 */}
            <div className="mt-4">
              <h1 className="font-bold ml-10 ">ReAct in 2019</h1>
              <div className=" mt-0">
                <p className="ml-10">
                  ReAct was co-founded by Tenaganita and Beyond Borders after a
                  consultation event attended by:
                </p>
                <ul className="list-disc ml-19">
                  <li>Refugee leaders.</li>
                  <li>
                    NGO representatives and government officials from the Health
                    and Human Resource Ministries.
                  </li>
                </ul>
              </div>
            </div>
            {/* 2020 */}
            <div className="mt-4  ml-10">
              <h1 className="font-bold ">ReAct in 2020</h1>
              <div className="">
                <p className="">
                  ReAct members were split into 9 working group to achieve
                  various advocacy goals but was not successful.
                </p>
                <p className="font-semibold">
                  The topics/areas of focus were :{" "}
                </p>
                <ul className="list-decimal ml-10">
                  <li>Capacity Building</li>
                  <li>Social Media Content & Posting</li>
                  <li>ReAct Statements</li>
                  <li>"On-Ground" Social Engagements</li>
                  <li>Community Stories</li>
                  <li>Other Best Practices & Advocacy Efforts</li>
                  <li>Engagement with UNHCR </li>
                  <li>Engagement with Members of Parliament </li>
                  <li>Engagement with Ministers/Government Bodies</li>
                </ul>
                <p className=" font-semibold">
                  Why were the working groups not successful in the end?
                </p>
                <p className=" ml-6 font-semibold">Due to:</p>
                <ul className="list-disc ml-10">
                  <li>Undefined responsibilities of members</li>
                  <li>Limited commitments from members </li>
                  <li>Lack of funds</li>
                  <li>Lack of coordination</li>
                  <li>Lack of management </li>
                </ul>
              </div>
            </div>
            {/* 2021 */}
            <div className="mt-4">
              <h1 className="font-bold ml-10 ">ReAct in 2021 & 2022</h1>
              <div className="ml-10 ">
                <p>
                  Coordinators were recruited and attended capacity-building
                  trainings in fulfilling their roles from July 2021 to March
                  2022.
                </p>
                <p className="font-semibold">The topics were :</p>
                <ul className="list-disc ml-10 ">
                  <li>Authentic & Effective Leadership</li>
                  <li>Leading with others & teamwork</li>
                  <li>Proposal writing - and more.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
