"use client";

import { Box, Text } from "@chakra-ui/react";
import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";

export default function ImagesGrids() {
  const PRIMARY_COL_HEIGHT = rem(400);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container size="lg" my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Box
          position="relative"
          height={PRIMARY_COL_HEIGHT}
          borderRadius="1rem"
          overflow="hidden"
        >
          <Box
            backgroundImage={`url(https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?w=1060&t=st=1704036966~exp=1704037566~hmac=adf0913127f922191f168c38416d1fda32b47d2e24765fc361a6907ef2af96a8)`}
            backgroundSize="cover"
            backgroundPosition="center"
            position="relative"
            height="100%"
            borderRadius="1rem"
          >
            {/* Dark filter */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              background="rgba(0, 0, 0, 0.7)" // Adjust the opacity as needed
            />
          </Box>
          {/* Quotation marks */}
          <Text
            position="absolute"
            top="-1rem"
            left="0rem"
            fontSize="2xl"
            fontWeight="bold"
            color="white"
          >
            &ldquo;
          </Text>

          {/* Title */}
          <Text
            position="absolute"
            top="1rem"
            left="1.5rem"
            color="white"
            fontWeight="bold"
            fontSize="xl"
          >
            Leave No One Behind
          </Text>

          {/* Description */}
          <Text
            p={4}
            position="absolute"
            bottom="0"
            left="1rem"
            color="white"
            fontSize="md"
          >
            ABOUT US Leave No One Behind Alkhidmat was founded on a principle to
            serve humanity without considering anyone’s religion, color, caste,
            or race. From Karachi to Chitral to the deserts of Thar, Alkhidmat
            contains the largest volunteer network. In times of disaster or
            hardship or any national emergency, Alkhidmat is considered as a
            most responsive network after the Army to provide relief to the
            people. 
          </Text>
        </Box>

        <Grid gutter="md">
          <Grid.Col>
            <div
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/modern-business-center_1127-3152.jpg?w=1060&t=st=1704037026~exp=1704037626~hmac=3cd964f572dd6ac7167f10bb36a389d3401b6679c88cb331be9ff261fc3d6955)",

                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "1rem",
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Box
              backgroundImage={`url(https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=1060&t=st=1703495385~exp=1703495985~hmac=af1e500db4f50b6e7d594a97d966152d76892721decf65e702c6395e7916ba8f)`}
              backgroundSize="cover"
              backgroundPosition="center"
              position="relative"
              height={SECONDARY_COL_HEIGHT}
              borderRadius="1rem"
            >
              {/* Quotation marks */}
              <Text
                position="absolute"
                top="-1rem"
                left="0"
                fontSize="2xl"
                fontWeight="bold"
                color="white"
              >
                &ldquo;
              </Text>

              {/* Title */}
              <Text
                position="absolute"
                bottom="6rem"
                left="1rem"
                color="white"
                fontWeight="bold"
                fontSize="xl"
              >
                OUR MISSION
              </Text>

              {/* Description */}
              <Text
                position="absolute"
                bottom="0"
                left=".5rem"
                color="white"
                fontSize="small"
                p={2}
              >
                We are devoted to helping humanity, particularly vulnerable and
                orphaned people.
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <div
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-310.jpg?w=1060&t=st=1704037014~exp=1704037614~hmac=5703c7fd2e102e358b49c38cf90c1858fbef56418f8ff9b582d5d302cff526ff)",

                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "1rem",
              }}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
