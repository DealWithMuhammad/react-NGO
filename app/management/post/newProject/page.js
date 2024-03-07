"use client";

import ServicesForm from "components/Management/ServicesForm";
import { postDoc } from "api/functions/post";
import { Container } from "@mantine/core";
import SectionHeader from "components/Common/SectionHeader";
// import Header from "components/Header";

export default function Page() {
  const handleSave = async (id, data) => {
    try {
      const res = await postDoc(data, "service");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Header admin={true} /> */}
      <Container size={"lg"}>
        <SectionHeader
          headerInfo={{
            title: "Post Form",
            subtitle: "Write A New Project",
            description: "",
          }}
        />
        <ServicesForm handleSave={handleSave} />
      </Container>
    </>
  );
}
