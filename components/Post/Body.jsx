import Image from "next/image";
import React from "react";
import Container from "../container";
import Link from "next/link";
import SectionHeader from "../Common/SectionHeader";

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
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href={link}
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}
