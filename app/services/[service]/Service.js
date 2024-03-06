"use client";

import { usePathname } from "next/navigation";
import ServiceData from "./ServiceData";
import { Container } from "@mantine/core";
import { Link } from "@nextui-org/react";
import SectionHeader from "components/common/SectionHeader";

export default function Service() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  // Find the service with a matching id
  const service = ServiceData.find((service) => service.href.includes(id));

  const { name, details } = service;

  return (
    <div>
      {service ? (
        <>
          <SectionHeader
            headerInfo={{
              title: name,
            }}
          />
          <article className="mx-auto max-w-screen-md ">
            <div className="prose mx-auto my-3 text-xl text-slate-500 text-center font-semibold dark:prose-invert prose-a:text-blue-600">
              {details}
            </div>
            <div className="mb-7 mt-7 flex justify-center">
              <Link
                href="/blogs"
                className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
              >
                ← View all services
              </Link>
            </div>
          </article>
        </>
      ) : (
        <p>Service not found</p>
      )}
    </div>
  );
}
