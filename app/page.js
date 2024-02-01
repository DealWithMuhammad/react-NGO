"use client";

import Hero from "components/Hero";
import PropertyListings from "components/PropertyListings";
import Services from "components/Services";
import FunFact from "components/FunFact";
import SAM from "components/SAM";
import FAQ from "components/FAQ";
import Blog from "components/Blog";
import Testimonial from "components/Testimonial";
import HeroVideo from "components/HeroVideo";

export default function Home() {
  return (
    <main className="backdrop-blur-sm">
      <section className="relative">
        {/* <HeroVideo /> */}
        {/* <div className="absolute z-99 top-0"> */}
        <Hero />
        {/* </div> */}
      </section>
      <PropertyListings all={false} />
      {/* <Testimonial /> */}
      {/* <SAM /> */}
      <Services />
      <FunFact />
      <Blog all={false} />
      <FAQ />
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      {/* <About /> */}
      {/* <Pricing /> */}
    </main>
  );
}
