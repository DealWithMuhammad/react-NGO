// Import necessary components from Chakra UI
"use client";

import { Box, Text, IconButton, Flex } from "@chakra-ui/react";
import { Container } from "@mantine/core";
import { BarChart, People } from "@mui/icons-material";
import SectionHeader from "components/Common/SectionHeader";
import { useRouter } from "next/navigation";
import Header from "components/Header";

export default function DashboardPage() {
  const router = useRouter();

  const nav = (page) => {
    router.push(`management/${page}`);
  };

  return (
    <>
      {/* <StatsGrid /> */}
      <Container size={"lg"}>
        <SectionHeader
          headerInfo={{
            title: "Dashboard",
            subtitle: "Welcome to Dashboard",
            description: "Manage your posts and publish new ones with ease.",
          }}
        />

        {/* Action buttons in big cards */}
        <Flex mt={6} flexWrap={"wrap"} gap={5}>
          {/* Campaign Management card */}
          <Box
            bg="blue.100"
            p={8}
            borderRadius="md"
            flex="1"
            mr={4}
            onClick={() => nav("blogs")}
            _hover={{ cursor: "pointer", bg: "blue.200" }}
          >
            <IconButton
              colorScheme="blue"
              aria-label="Campaign Management"
              icon={<BarChart />}
              fontSize="2xl"
            />
            <Text mt={2} fontWeight="bold">
              Posts Management
            </Text>
            <Text mt={1} fontSize="sm">
              Manage your posts here.
            </Text>
          </Box>

          {/* Founder Management card */}
          <Box
            bg="green.100"
            p={8}
            borderRadius="md"
            flex="1"
            onClick={() => nav("post")}
            _hover={{ cursor: "pointer", bg: "green.200" }}
          >
            <IconButton
              colorScheme="green"
              aria-label="Publish New Post"
              icon={<People />}
              fontSize="2xl"
            />
            <Text mt={2} fontWeight="bold">
              Publish Post
            </Text>
            <Text mt={1} fontSize="sm">
              Publish Post and blogs.
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
