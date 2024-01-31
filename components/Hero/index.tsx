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
    title:
      "Empowering Change, Building Unity: Refugee Action for Change (ReAct)",
    subtitle: "Advocating for Refugee Rights in Malaysia",
    dynamicText: (
      <TextTransition
        springConfig={presets.wobbly}
        style={{ fontSize: "1.3rem", fontWeight: 600 }}
        className="caret-neutral-900"
      >
        {
          [
            "We empower the refugee community through training and awareness activities, fostering effective advocacy and self-representation.",
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
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero.jpg')",
        }}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-2/3  p-8 rounded-lg">
              <h4 className="mb-4.5 text-md font-medium text-white">
                {heroContent.title}
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-white xl:text-hero ">
                {heroContent.subtitle}
              </h1>
              <p className="text-white">
                We empower the refugee community through training and awareness
                activities, fostering effective advocacy and
                self-representation.
              </p>
              <div className="mt-8">
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
