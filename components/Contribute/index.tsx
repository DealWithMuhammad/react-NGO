"use client";
// Import necessary packages and components
import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

// Define the Contact component
const Contribute: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  // Toast for success message
  const toast = useToast();

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      console.log("Submitting form with data:", formData); // Log the form data

      // Use Sanity client to create a new document in the 'contact' collection
      // await client.create({
      //   _type: "contact",
      //   ...formData,
      // });

      // Optionally, you can reset the form data after successful submission
      setFormData({
        username: "",
        email: "",
        phone: "",
        message: "",
      });

      // Display success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      // Display error message if submission fails
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Function to handle input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Render the component
  return (
    <Box mx={0}>
      <Flex
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        flexDir={{ base: "column", lg: "row" }}
        gap="2rem"
        data-aos="fade-up"
      >
        {/* ... your existing JSX code */}
        <Box w={{ base: "100%", lg: "45%" }}>
          <Heading pl="12x" size="2xl">
            Let's collaborate
          </Heading>

          <Box>
            <Box className="mt-12">
              <Text fontSize="xl">
                For inquiries or assistance, please reach out to us.
              </Text>
              <Text fontSize="xl">+60 11-3986 5270</Text>
            </Box>
            <Divider mt="2rem" />
          </Box>
        </Box>

        {/* Updated form section with added event handlers */}
        <Stack spacing={10} w={{ base: "100%", lg: "55%" }}>
          <Stack spacing="2rem">
            {/* ... other form fields */}
            <Box>
              <Input
                border={"1px"}
                type="text"
                placeholder="Name"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <InputGroup>
                <Input
                  border={"1px"}
                  type="text"
                  placeholder="Organization"
                  name="organization"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Box>
            <Box>
              <Input
                border={"1px"}
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Textarea
                border={"1px"}
                placeholder="Message"
                rows={8}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </Box>
            <Button
              size="md"
              height="48px"
              width="100%"
              colorScheme="yellow"
              border="2px"
              borderColor="white"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

// Export the Contact component
export default Contribute;
