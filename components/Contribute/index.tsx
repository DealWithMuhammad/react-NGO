"use client";
// Import necessary packages and components
import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
// Define the Contact component
function Contribute() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gy5jcvd",
      "template_yqwwog9",
      form.current,
      "pqMyXicXMC2Zzs9gv"
    );
    e.target.reset();
  };

  // Render the component
  return (
    <Box mx={10}>
      <Flex
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        flexDir={{ base: "column", lg: "row" }}
        gap="2rem"
        data-aos="fade-up"
      >
        {/* ... your existing JSX code */}
        <Box mx={"auto"} w={{ base: "100%", lg: "45%" }}>
          <Heading pl="12x" size="2xl">
            Let's collaborate
          </Heading>

          <Box>
            <Box className="mt-12">
              <Text fontSize="xl">
                For inquiries or assistance, please reach out to us.
              </Text>
              <Text fontSize="xl">+60 17-992 2312</Text>
            </Box>
            <Divider mt="2rem" />
          </Box>
        </Box>

        {/* Updated form section with added event handlers */}
        <Stack spacing={10} w={{ base: "100%", lg: "55%" }}>
          <Stack spacing="2rem">
            {/* ... other form fields */}
            <form ref={form} onSubmit={sendEmail}>
              <Box>
                <Input
                  border={"1px"}
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </Box>
              <Box>
                <InputGroup>
                  <Input
                    border={"1px"}
                    type="text"
                    placeholder="Organization"
                    name="organization"
                  />
                </InputGroup>
              </Box>
              <Box>
                <Input
                  border={"1px"}
                  type="email"
                  placeholder="E-mail"
                  name="email"
                />
              </Box>
              <Box>
                <Textarea
                  border={"1px"}
                  placeholder="Message"
                  rows={8}
                  name="message"
                />
              </Box>
              <Button
                size="md"
                height="48px"
                width="100%"
                colorScheme="yellow"
                border="2px"
                borderColor="white"
                aria-label="send message"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

// Export the Contact component
export default Contribute;
