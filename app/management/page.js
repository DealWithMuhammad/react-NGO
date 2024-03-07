import { ActionIcon, Box, Container, Flex, Text } from "@mantine/core";
import SectionHeader from "components/Common/SectionHeader";
import Link from "next/link";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <Container size={"lg"}>
        <SectionHeader
          headerInfo={{
            title: "Dashboard",
            subtitle: "Welcome to Dashboard",
            description: "Manage your posts and publish new ones with ease.",
          }}
        />

        {/* Action buttons in big cards */}
        <Flex mt={6} className="flex flex-wrap" gap={5}>
          {/* Campaign Management card */}
          <Box className="min-w-[40vw] bg-blue-500 rounded-md flex-1 mr-2 p-6 cursor-pointer">
            <Link href={"/management/blogs"}>
              <ActionIcon variant="light" color="dark" aria-label="Settings">
                <FaPeopleRobbery />
              </ActionIcon>
              <Text mt={2} fontWeight="bold">
                Posts Management
              </Text>
              <Text mt={1} fontSize="sm">
                Manage your posts here.
              </Text>
            </Link>
          </Box>
          {/* Founder Management card */}
          <Box className="min-w-[40vw] bg-green-500 rounded-md flex-1 mr-2 p-6 cursor-pointer">
            <Link href={"/management/post"}>
              <ActionIcon variant="light" color="dark" aria-label="Settings">
                <FaChartSimple />
              </ActionIcon>
              <Text mt={2} fontWeight="bold">
                Publish Post
              </Text>
              <Text mt={1} fontSize="sm">
                Publish Post and blogs.
              </Text>
            </Link>
          </Box>
          {/* Post Projects */}
        </Flex>
      </Container>
    </>
  );
}
