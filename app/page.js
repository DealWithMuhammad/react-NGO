"use client";

import Hero from "components/Hero";
import PropertyListings from "components/PropertyListings";
import Services from "components/Services";
import FunFact from "components/FunFact";
import FAQ from "components/FAQ";
import Contribute from "components/Contribute";
import BlogsListing from "components/BlogsListing";
import Feature from "components/Features";

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
      <Feature />
      <div className="my-14">
        <BlogsListing />
      </div>
      <FAQ />
      <div className="my-14">
        <Contribute />
      </div>
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      {/* <About /> */}
      {/* <Pricing /> */}
    </main>
  );
}
