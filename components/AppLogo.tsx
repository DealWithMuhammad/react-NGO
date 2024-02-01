import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const AppLogo = () => {
  return (
    <Link href="/">
      <Image
        src={"/logo.png"}
        alt="logo"
        height={100}
        width={160}
        unoptimized
      />
    </Link>
  );
};
