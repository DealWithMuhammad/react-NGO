"use client";
import { Flex, Center, Spinner } from "@chakra-ui/react"; // Import Chakra UI components

import SAM from "components/SAM";
import Post from "components/Post";
import Blog from "components/Blog";
import PropertyListings from "components/PropertyListings";
import { getDocById } from "api/functions/get";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true); // State to control loading visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = pathname.split("/").pop();
        const fetchedBlogData = await getDocById(id, "blogs");
        setBlogData(fetchedBlogData);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [pathname]);

  return (
    <main>
      {loading ? ( // Show loader if loading is true
        <Flex height="100vh" align="center" justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          <Post info={blogData} />
          <SAM />
          <PropertyListings />
          <Blog />
        </>
      )}
    </main>
  );
}
