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
import { Link } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Image } from "@chakra-ui/react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import navLinks from "./HeaderLinks";
import { NavMenu } from "./NavMenu";

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
        bg="#000"
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
            zIndex={1}
          >
            <IconBrandFacebook size={20} color="#fff" />
          </Link>
          <Link
            href="https://www.instagram.com/react.malaysia?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
            zIndex={1}
          >
            <IconBrandInstagram
              size={25}
              style={{ padding: "2px" }}
              color="#fff"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/refugee-action-for-change/"
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: ".8rem",
            }}
            zIndex={1}
          >
            <IconBrandLinkedin
              style={{
                color: "#fff",
                fontSize: "21px",
                marginRight: "1rem",
              }}
              color="#fff"
            />
          </Link>
        </Flex>

        {/* Phone Icon */}
        <Flex
          alignItems="center"
          px={1}
          style={{
            height: "2rem",
            borderBottomLeftRadius: 15,
          }}
          bg="#f8cf2c"
        >
          <IconPhone size={22} style={{ padding: "2px" }} color="#000" />
          {/* Uncomment the following lines if you want to add a phone link */}
          <Link
            href="tel:+60 113986 5270"
            style={{ color: "#000", fontSize: ".7rem" }}
            ml="0.5rem"
          >
            +60 113986 5270
          </Link>
        </Flex>
      </Flex>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" style={{ width: "12rem" }}>
            <div className="relative">
              <Image
                className="absolute bottom-[-59px] md:bottom-[-66px]"
                src="/logo.png"
                width={"140px"}
                height="140px"
                alt="logo"
              />
            </div>
          </Link>

          <div
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            className="relative  bottom-3.5 md:hidden"
          >
            <NavMenu />
            {/* <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              color={"#000000"}
            /> */}
          </div>
          {/* nav links */}
          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{ color: "#000", fontSize: "16px" }}
                className={
                  "flex items-center h-full px-4 text-black font-medium text-sm hover:text-red-500"
                }
              >
                {link.label}
              </Link>
            ))}
          </Group>
        </Group>
      </header>
    </Box>
  );
}
