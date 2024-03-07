"use client";

import { useEffect, useState } from "react";
import Table from "./Table";
import { Spinner } from "@nextui-org/react";
import { deleteDocument } from "api/functions/post";
import { Flex } from "@mantine/core";
import { getService } from "api/functions/get";

export function ServicesTable() {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedServiceData = await getService();
        setService(fetchedServiceData);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDocument("service", id);
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
        <Table
          service={service}
          columns={columns}
          handleDelete={handleDelete}
        />
      )}
    </section>
  );
}
