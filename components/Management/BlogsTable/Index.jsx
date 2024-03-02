"use client";

import { useEffect, useState } from "react";
import Table from "./Table";
import { getBlogs } from "api/functions/get";
import { Spinner } from "@nextui-org/react";
import { deleteDocument } from "api/functions/post";
import { Flex } from "@mantine/core";

export default function BlogsTable() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBlogData = await getBlogs();
        setBlogs(fetchedBlogData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDocument("blogs", id);
    } catch (error) {
      console.log("errror while deleting");
    }
  };

  const columns = [
    { name: "Title", uid: "title" },
    { name: "Subtitle", uid: "subtitle" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <section>
      {loading ? ( // Show loader if loading is true
        <Flex height="20vh" align="center" justify="center">
          <Spinner size="xl" color="default" />
        </Flex>
      ) : (
        <Table blogs={blogs} columns={columns} handleDelete={handleDelete} />
      )}
    </section>
  );
}
