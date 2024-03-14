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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ededed"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <FacebookPost />
      <div className="my-14">
        <Contribute />
      </div>
      <FAQ />
    </main>
  );
}
