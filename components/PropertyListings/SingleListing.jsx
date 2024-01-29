import { Card, Text, Group, Button, Image } from "@mantine/core";
import classes from "./CarouselCard.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleListing = ({ item }) => {
  const { title, subtitle, imageUrl, price, id } = item;

  return (
    <div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        key={id}
      >
        <Card
          shadow="md"
          radius="md"
          withBorder
          padding="xl"
          style={{ width: "auto" }}
        >
          <Card.Section>
            <Image height={160} src={imageUrl} alt={`Property Picture`} />
          </Card.Section>

          <Group justify="space-between" mt="lg">
            <Text fw={500} fz="lg">
              {title}
            </Text>
          </Group>

          <Text fz="sm" c="dimmed" mt="sm">
            {subtitle}
          </Text>

          <Group justify="space-between" mt="md">
            <div>
              <Text fz="xl" span fw={500} className={classes.price}>
                {`Rs ${price}`}
              </Text>
            </div>
            <Link href={`/Blogs/${id}`}>
              <Button radius="md" bg={"dark"}>
                More Details
              </Button>
            </Link>
          </Group>
        </Card>
      </motion.div>
    </div>
  );
};

export default SingleListing;
