"use client";

import { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import KnowMore from "components/Common/KnowMore";
import { getBlogs } from "api/functions/get";
import { Flex } from "@chakra-ui/react";
import { Spinner } from "@nextui-org/react";

const Blog = ({ all, selectedCategory }) => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogData = await getBlogs();
      setBlogData(fetchedBlogData);
    };
    setLoading(false);
    fetchData();
  }, [all]);

  const filteredBlogData = blogData.filter(
    (blog) => blog.category === selectedCategory
  );

  const sliceBlogData = all ? filteredBlogData : blogData.slice(0, 3);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>
      </div>
      {/* 
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {loading ? ( // Show loader if loading is true
          <Flex height="20vh" align="center" justify="center">
            <Spinner size="xl" color="default" />
          </Flex>
        ) : (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {sliceBlogData && sliceBlogData.map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>
        )}
        {!all && <KnowMore link={"/Blogs"} />}
      </div> */}
    </section>
  );
};

export default Blog;
