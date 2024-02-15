"use client";

import Hero from "components/Hero";
import PropertyListings from "components/PropertyListings";
import Services from "components/Services";
import FunFact from "components/FunFact";
import FAQ from "components/FAQ";
import Blog from "components/Blog";
import Contribute from "components/Contribute";

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
      {/* <Members /> */}
      <Blog all={false} />
      <FAQ />
      <Contribute />
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      {/* <About /> */}
      {/* <Pricing /> */}
    </main>
  );
}
