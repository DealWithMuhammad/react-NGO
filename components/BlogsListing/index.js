"use client";

import SectionHeader from "../Common/SectionHeader";
import { SingleCard } from "./SingleCard";
import { Container, Flex } from "@mantine/core";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getBlogs } from "api/functions/get";

const BlogsListing = ({ all, category }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchedBlogData = await getBlogs();
      setBlogs(fetchedBlogData);
      setLoading(false);
    };

    fetchData();
  }, []); // Fetch data on initial render only

  // Filter blogs based on selected category or show all if no category is selected
  const filteredBlogData = category
    ? blogs.filter((blog) => blog.category === category)
    : blogs;

  // Show all blogs if 'all' prop is true, otherwise show only the first 3
  const sliceBlogData = all ? filteredBlogData : filteredBlogData.slice(0, 3);

  if (loading) {
    return (
      <Flex height="20vh" align="center" justify="center">
        <Spinner size="xl" color="default" />
      </Flex>
    );
  }
  return (
    <Container mt={10} size={"lg"}>
      <SectionHeader
        headerInfo={{
          title: "OUR News and Blogs",
          subtitle: "Latest News & Blog",
          description:
            "Explore ReAct's impactful journey and stay updated on refugee rights advocacy and community empowerment through our News and Blogs section.",
        }}
      />
      <div className="gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sliceBlogData.map((item, index) => (
          <SingleCard key={index} item={item} />
        ))}
      </div>
      <br />
    </Container>
  );
};

export default BlogsListing;
