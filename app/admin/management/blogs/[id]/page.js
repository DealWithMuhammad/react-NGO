"use client";
import PostForm from "components/Management/PostForm";
import { updateDoc } from "api/functions/post";
import { getDocById } from "api/functions/get";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Center, Container } from "@mantine/core";
import { Spinner } from "@nextui-org/react";
import SectionHeader from "../../../../../components/Common/SectionHeader";

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

  const handleSave = async (id, data) => {
    if (id.length > 5) {
      try {
        const res = await updateDoc("blogs", id, data);
        if (res === true) {
        }
      } catch (error) {}
    } else {
      console.log("post not found to modify");
    }
  };

  return (
    <>
      {/* <Header admin={true} /> */}
      <Container size={"lg"}>
        {loading ? ( // Show loader if loading is true
          <Center height="100vh" className="mt-[30vh]">
            <Spinner size="xl" />
          </Center>
        ) : (
          <>
            <SectionHeader
              headerInfo={{
                title: "Post Form",
                subtitle: "Modify Post",
                description: "",
              }}
            />
            <PostForm handleSave={handleSave} props={blogData} />
          </>
        )}
      </Container>
    </>
  );
}
