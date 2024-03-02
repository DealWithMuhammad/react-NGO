"use client";

import { Center } from "@mantine/core";
import Body from "./Body";
import { getDocById } from "api/functions/get";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

export default function Post({ link }) {
  const pathname = usePathname();
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  console.log(blogs);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        setLoading(true); // Set loading to true when fetching starts

        const match = pathname && pathname.match(/\/([^/]+)$/);
        const id = match && match[1];

        if (id) {
          let data = await getDocById(id, "blogs");
          setBlogs(data);
        }

        setLoading(false); // Set loading to false when fetching completes
      } catch (error) {
        // Handle errors
        console.error("Error fetching blogs:", error);
        setLoading(false); // Ensure loading is set to false on error
      }
    };

    fetchblogs();
  }, [pathname]);

  if (loading) {
    // Render loading state
    return (
      <Center height="80vh" className="mt-[30vh]">
        <Spinner size="xl" />
      </Center>
    );
  }

  return <Body props={blogs} link={link} />;
}
