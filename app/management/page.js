"use client";

import { ActionIcon, Box, Container, Flex, Text } from "@mantine/core";
import SectionHeader from "components/Common/SectionHeader";
import Link from "next/link";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { GoPeople, GoProject } from "react-icons/go";
import { RiMailSendFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("isAuthenticated:", isAuthenticated);
    if (!isAuthenticated || isAuthenticated !== "true") {
      // Redirect to sign-in page if not authenticated
      router.push("/signin");
    }
  }, []);

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
        <Flex mt={10} className="flex flex-wrap" gap={5}>
          {/* Campaign Management card */}
          <Box className="min-w-[40vw] bg-blue-500 rounded-md flex-1 mr-2 p-6 cursor-pointer">
            <Link href={"/management/blogs"}>
              <ActionIcon variant="light" color="dark" aria-label="Settings">
                <FaPeopleRobbery />
              </ActionIcon>
              <Text mt={2} fontWeight="bold">
                News & Blogs Management
              </Text>
              <Text mt={1} fontSize="sm">
                Manage your Blogs here.
              </Text>
            </Link>
          </Box>
          {/* Founder Management card */}
          <Box className="min-w-[40vw] bg-green-500 rounded-md flex-1 mr-2 p-6 cursor-pointer">
            <Link href={"/management/post/newBlog"}>
              <ActionIcon variant="light" color="dark" aria-label="Settings">
                <FaChartSimple />
              </ActionIcon>
              <Text mt={2} fontWeight="bold">
                Publish Blogs
              </Text>
              <Text mt={1} fontSize="sm">
                Publish your News & Blogs here.
              </Text>
            </Link>
          </Box>

          {/* Post Projects */}
        </Flex>
        <Flex mt={12} className="flex flex-wrap " gap={5}>
          <Box className="min-w-[40vw] bg-yellow-500 rounded-md flex-1 mr-2 p-6 cursor-pointer">
            <Link href={"/management/services"}>
              <ActionIcon variant="light" color="dark" aria-label="Settings">
                <GoProject />
              </ActionIcon>
              <Text mt={2} fontWeight="bold">
                Projects Management
              </Text>
              <Text mt={1} fontSize="sm">
                Manage your Projects here.
              </Text>
            </Link>
          </Box>

          <Box className="min-w-[40vw] bg-pink-500 rounded-md flex-1 mr-2 p-6 cursor-pointer">
            <Link href={"/management/post/newProject"}>
              <ActionIcon variant="light" color="dark" aria-label="Settings">
                <GrProjects />
              </ActionIcon>
              <Text mt={2} fontWeight="bold">
                Publish Project
              </Text>
              <Text mt={1} fontSize="sm">
                Publish your Projects here.
              </Text>
            </Link>
          </Box>
        </Flex>
        <Flex mt={12} className="flex flex-wrap " gap={5}>
          <Box className="min-w-[40vw] bg-gray-500 rounded-md flex-1 mr-2 p-6 cursor-pointer">
            <Link href={"/management/newsletter"}>
              <ActionIcon variant="light" color="dark" aria-label="Settings">
                <RiMailSendFill />
              </ActionIcon>
              <Text mt={2} fontWeight="bold">
                Manage Newsletter
              </Text>
              <Text mt={1} fontSize="sm">
                Send mails to your subscribers.
              </Text>
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
