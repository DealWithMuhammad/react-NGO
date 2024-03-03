"use client";

import Hero from "components/Hero";
import PropertyListings from "components/PropertyListings";
import Services from "components/Services";
import FunFact from "components/FunFact";
import FAQ from "components/FAQ";
import Contribute from "components/Contribute";
import BlogsListing from "components/BlogsListing";

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
      <FunFact />
      {/* <Services /> */}
      {/* <Testimonial /> */}
      {/* <SAM /> */}
      {/* <Members /> */}
      {/* <Blog all={false} /> */}
      <BlogsListing />

      <FAQ />
      <Contribute />
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      {/* <About /> */}
      {/* <Pricing /> */}
    </main>
  );
}
