"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MantineProvider } from "@mantine/core";
import { ChakraProvider } from "@chakra-ui/react";
import "@mantine/core/styles.css";

export function Providers({ children }) {
  return (
    <MantineProvider>
      <ChakraProvider>
        <NextUIProvider>{children}</NextUIProvider>{" "}
      </ChakraProvider>
    </MantineProvider>
  );
}
