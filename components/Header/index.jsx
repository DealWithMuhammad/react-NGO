"use client";
import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import navLinks from "./HeaderLinks";

export default function HeaderMenu() {
  const nav = useRouter();

  const push = (url) => {
    nav.push(url);
  };

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box style={{ overflow: "hidden", position: "relative" }}>
      <Flex
        bg="#edf6f9"
        alignItems="center"
        justifyContent="space-between"
        m={0}
        p={0}
        // textTransform="uppercase"
      >
        {/* Social Media Icons */}
        <Flex alignItems="center" px={1}>
          <Link
            href="https://www.facebook.com/ReActMalaysia?mibextid=9R9pXO"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <IconBrandFacebook size={20} color="#3b5998" />
          </Link>
          <Link
            href="https://www.instagram.com/react.malaysia?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            ml="1rem"
            _hover={{ textDecoration: "none" }}
          >
            <IconBrandInstagram
              size={25}
              style={{ padding: "2px" }}
              color="#e4405f"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/refugee-action-for-change/"
            ml="1rem"
            style={{
              color: "#0b090a",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: ".8rem",
            }}
          >
            <IconBrandLinkedin
              style={{
                color: "#0b090a",
                fontSize: "21px",
                marginRight: "1rem",
              }}
              color="#3b5998"
            />
            reactmalaysia@gmail.com
          </Link>
        </Flex>

        {/* Phone Icon */}
        <Flex
          alignItems="center"
          px={1}
          style={{
            backgroundColor: "#83c5be",
            height: "2rem",
            borderBottomLeftRadius: 15,
          }}
        >
          <IconPhone size={22} style={{ padding: "2px" }} color="#0b090a" />
          {/* Uncomment the following lines if you want to add a phone link */}
          <Link
            href="tel:+60 113986 5270"
            style={{ color: "#0b090a", fontSize: ".7rem" }}
            ml="0.5rem"
          >
            +60 113986 5270
          </Link>
        </Flex>
      </Flex>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" style={{ width: "12rem" }}>
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="logo"
              className="filter brightness-0 grayscale-100"
              style={{
                zIndex: 999,
                position: "absolute",
                top: 15,
                width: "auto",
                height: "7rem",
                filter: "brightness(0) invert(1) grayscale(1)",
              }}
            />
          </Link>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="relative bottom-3.5"
          >
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              color={"#000000"}
            />
          </div>
          {/* nav links */}
          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{ color: "#000000", fontSize: "16px" }}
                className={classes.link}
              >
                {link.label}
              </Link>
            ))}
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Image
          className="realtive bottom-10"
          width={100}
          height={100}
          src="/logo.png"
          alt="Logo"
        />
        <ScrollArea h={`calc(90vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
        </ScrollArea>
        <Divider my="sm" />
      </Drawer>
      {/* <Flex
        alignItems="center"
        justifyContent={"center"}
        p={1}
        bgColor={"#edf6f9"}
      >
        <Link
          href="/Construction"
          rel="noopener noreferrer"
          _hover={{ textDecoration: "none" }}
          style={{ fontWeight: "900", color: "#000" }}
        >
          Welcome to React
        </Link>
      </Flex> */}
    </Box>
  );
}
