"use client"

import PostForm from "components/PostForm";
import { postDoc } from "api/functions/post";
import { useToast } from "@chakra-ui/react";

export default function Page() {
  const toast = useToast()
  const handleSave = async (data) => {
    try {
      const res = await postDoc(data, "blogs");
      if (res === true) {
        toast({
          title: 'Blog Posted.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        title: 'Something Went Wrong.',
        description: `Error: ${error}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
    <section>
      <PostForm handleSave={handleSave} />
    </section>
  );
}
