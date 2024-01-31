"use client";
import PostForm from "components/Management/PostForm";
import { Flex, Spinner } from "@chakra-ui/react";
import SectionHeader from "components/Common/SectionHeader";
import { updateDoc } from "api/functions/post";
import { useToast } from "@chakra-ui/react";
import { getDocById } from "api/functions/get";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@mantine/core";
import Header from "components/Header";

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

  const toast = useToast();
  const handleSave = async (data) => {
    try {
      const res = await updateDoc(data, "blogs");
      if (res === true) {
        toast({
          title: "Post Modified.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong.",
        description: `Error: ${error}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Header admin={true} />
      <Container size={"lg"}>
        {loading ? ( // Show loader if loading is true
          <Flex height="100vh" align="center" justify="center">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <>
            <SectionHeader
              headerInfo={{
                title: "Post Form",
                subtitle: "Modify Post",
                description:
                  "We offer a comprehensive range of architectural and construction services to bring your ideas to clients.",
              }}
            />
            <PostForm handleSave={handleSave} props={blogData} />
          </>
        )}
      </Container>
    </>
  );
}
