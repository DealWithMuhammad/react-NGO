"use client";
import ServicesForm from "components/Management/ServicesForm";
import { updateDoc } from "api/functions/post";
import { getDocById } from "api/functions/get";
import { getService } from "api/functions/get";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Center, Container } from "@mantine/core";
import { Spinner } from "@nextui-org/react";
import SectionHeader from "../../../../../components/Common/SectionHeader";

export default function Page() {
  const pathname = usePathname();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true); // State to control loading visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = pathname.split("/").pop();
        const fetchedServiceData = await getDocById(id, "service");
        setService(fetchedServiceData);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [pathname]);

  const handleSave = async (id, data) => {
    if (id.length > 5) {
      try {
        const res = await updateDoc("service", id, data);
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
                subtitle: "Modify Project",
                description: "",
              }}
            />
            <ServicesForm handleSave={handleSave} props={service} />
          </>
        )}
      </Container>
    </>
  );
}
