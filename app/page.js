"use client";

import Hero from "components/Hero";
import PropertyListings from "components/PropertyListings";
import FunFact from "components/FunFact";
import FAQ from "components/FAQ";
import Contribute from "components/Contribute";
import BlogsListing from "components/BlogsListing";
import Feature from "components/Features";
import Services from "components/Services";

export default function Home() {
  return (
    <main className="backdrop-blur-sm">
      <section className="relative">
        <Hero />
      </section>
      <PropertyListings all={false} />
      <FunFact />
      {/* <Feature /> */}
      <Services all={true} />
      <div className="my-14">
        <BlogsListing />
      </div>
      <FAQ />
      <div className="my-14">
        <Contribute />
      </div>
    </main>
  );
}
