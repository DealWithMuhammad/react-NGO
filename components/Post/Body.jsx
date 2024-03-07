import Image from "next/image";
import React from "react";
import Container from "../container";
import SectionHeader from "../Common/SectionHeader";
import { Button, Link } from "@nextui-org/react";

export default function Body({ props, link }) {
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center"></div>

          <SectionHeader
            headerInfo={{
              title: props?.title || "",
              subtitle: props?.subtitle || "",
              description: "DETAILS ABOUT THE BLOGS",
            }}
          />
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          src={props?.imageUrl || ""}
          alt={"Thumbnail"}
          loading="eager"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            <div dangerouslySetInnerHTML={{ __html: props?.about }} />
          </div>
          <div className="flex justify-center my-10">
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
        </article>
      </Container>
    </>
  );
}
