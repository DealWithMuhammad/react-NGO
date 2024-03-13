"use client";

import Hero from "components/Hero";
import PropertyListings from "components/PropertyListings";
import FunFact from "components/FunFact";
import FAQ from "components/FAQ";
import Contribute from "components/Contribute";
import BlogsListing from "components/BlogsListing";
import Services from "components/Services";
import { Button, Link } from "@nextui-org/react";
import FacebookPost from "components/Facebook";

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
        <div className="flex justify-center">
          <Button
            size="md"
            height="48px"
            width="100%"
            border="2px"
            borderColor="white"
            className="bg-[#f8cf2c] text-white"
          >
            <Link className="text-white" href="/Blogs">
              View All Blogs
            </Link>
          </Button>
        </div>
      </div>
      <FacebookPost />
      <FAQ />
      <div className="my-14">
        <Contribute />
      </div>
    </main>
  );
}
