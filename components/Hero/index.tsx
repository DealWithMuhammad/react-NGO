"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";
import { Link } from "@nextui-org/react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const heroContent = {
    title: "Refugee Action for Change (ReAct)",
    subtitle: "Advocating for Refugee Rights in Malaysia",
    dynamicText: (
      <TextTransition
        springConfig={presets.wobbly}
        style={{ fontSize: "1.3rem", fontWeight: 600 }}
        className="caret-neutral-900"
      >
        {
          [
            "We empower refugees through training, awareness, and advocacy for self-representation.",
            "ReAct envisions legal recognition for all refugees in Malaysia, ensuring employment, education, and healthcare rights.",
            "Picture yourself hosting backyard barbecues and raising a family in a space you call home. Start your adventure with us.",
          ][index % 3]
        }
      </TextTransition>
    ),
    buttonText: "Explore More",
    placeholderText: "Enter your desired location",
    tryForFreeText: "",
  };

  return (
    <>
      <section
        className="bg-cover flex items-center bg-center  h-[440px] lg:h-[580px] w-full text-white tracking-wider relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/about.jpg')",
        }}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-2/3  p-8 rounded-lg">
              <Heading
                fontSize={{ base: "xs", md: "md" }}
                fontWeight={500}
                className="mb-4.5 text-white"
              >
                {heroContent.title}
              </Heading>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-white xl:text-hero ">
                Together we rise, united we
                <span className="text-[#f8cf2c]"> Advocate</span>
              </h1>
              <p className="text-white text-xs md:text-base">
                We unify refugee leaders and representatives, advocating for
                refugee rights and empowering the community through training and
                awareness activities
              </p>
              <div className="mt-8">
                <Link href={"/AboutUs"}>
                  <button
                    aria-label="get started button"
                    className="flex px-5 py-2.5 text-sm md:text-base rounded-full bg-[#f8cf2c] border-[#f8cf2c] border-2 md:px-12 md:py-2.5 text-[#000] duration-300 ease-in-out hover:bg-transparent hover:text-[#f8cf2c]"
                  >
                    {heroContent.buttonText}
                  </button>
                </Link>
                <p className="mt-5 text-[#252827] dark:text-white">
                  {heroContent.tryForFreeText}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
