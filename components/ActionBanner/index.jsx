"use client";

import { Card, Overlay, Button, Text } from "@mantine/core";
import classes from "./ActionBanner.module.css";
import Link from "next/link";

export default function ImageActionBanner() {
  return (
    <Card
      radius="md"
      className={`${classes.card} sm:w-90 md:w-70 lg:w-70 my-16`}
    >
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          Plan & save
        </Text>

        <Text size="sm" className={classes.description}>
          Save up to 25% at Fifth Season Hotels in Europe, the Middle East,
          Africa and Asia Pacific
        </Text>

        <Link href={"/PropertiesListing"} style={{ textDecoration: "none" }}>
          <Button
            className={classes.action}
            variant="white"
            color="dark"
            size="xs"
          >
            See Properties
          </Button>
        </Link>
      </div>
    </Card>
  );
}
