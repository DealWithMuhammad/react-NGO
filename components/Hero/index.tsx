"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

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
    title: "Find Your Dream Home ",
    subtitle: "Explore Stunning Properties in Your Area",
    dynamicText: (
      <TextTransition
        springConfig={presets.wobbly}
        style={{ fontSize: "1.3rem", fontWeight: 600 }}
        className="caret-neutral-900"
      >
        {
          [
            "Imagine stepping into a sunlit living room, your own haven to unwind. Discover properties that spark joy and ignite your imagination.",
            "Invest in more than just a property. Invest in a sense of belonging, where shared laughter echoes through the streets and memories are made to last..",
            "Picture yourself hosting backyard barbecues and raising a family in a space you call home. Start your adventure with us.",
          ][index % 3]
        }
      </TextTransition>
    ),
    buttonText: "Search Properties",
    placeholderText: "Enter your desired location",
    tryForFreeText: "",
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-10 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2  backdrop-blur-sm p-8 rounded-lg">
              <h4 className="mb-4.5 text-md font-medium text-black dark:text-white">
                {heroContent.title}
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                {heroContent.subtitle}
              </h1>

              <h6 className="text-md">{heroContent.dynamicText}</h6>

              <div className="mt-20">
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  {heroContent.buttonText}
                </button>

                <p className="mt-5 text-black dark:text-white">
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
