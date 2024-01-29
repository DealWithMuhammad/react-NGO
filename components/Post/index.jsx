import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
} from "@chakra-ui/react";
import Newsletter from "components/Common/Newsletter";
import SocialMediaLinksCard from "components/Common/SocialMediaLinksCard";

export default function Post({ info }) {
    const { title, subtitle, about, imageUrl, category } = info;

    return (
        <Container maxW={"7xl"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
            >
                <Flex>
                    <Image
                        rounded={"md"}
                        alt={"product image"}
                        src={imageUrl}
                        fit={"cover"}
                        align={"center"}
                        w={"100%"}
                        h={{ base: "100%", sm: "400px", lg: "500px" }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                        >
                            {title}
                        </Heading>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={"column"}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue("gray.200", "gray.600")}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue("gray.500", "gray.400")}
                                fontSize={"2xl"}
                                fontWeight={"300"}
                            >
                                {subtitle}
                            </Text>
                            <Text fontSize={"2xl"} fontWeight={"300"}>
                                {category}
                            </Text>
                        </VStack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent={"center"}
                        >
                            <SocialMediaLinksCard />
                        </Stack>
                    </Stack>
                </Stack>
                <Text fontSize={"lg"} className="bg-slate-100 p-2 rounded">
                    <div dangerouslySetInnerHTML={{ __html: about }} />

                </Text>
                <Newsletter />
            </SimpleGrid>
        </Container>
    );
}
