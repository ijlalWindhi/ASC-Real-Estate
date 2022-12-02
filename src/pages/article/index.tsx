import React from "react";
import { Flex, Text, Icon, Divider, Grid, GridItem } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import House1 from "../../assets/image-house.jpg";
import CardLarge from "./fragments/CardLarge";
import CardSmall from "./fragments/CardSmall";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollRef = React.useRef(null);
    return (
        <Flex
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={{ base: "column" }}
        >
            <Text
                color={"blue.200"}
                mt={10}
                as={motion.h1}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: "5" }}
            >
                BLOGS
            </Text>
            <Flex
                justifyContent={"space-between"}
                flexDir={{ base: "column", md: "row" }}
                gap={{ md: 10, lg: 10 }}
            >
                <Text
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight={"medium"}
                    maxW={{ base: "full", md: "80%", lg: "60%" }}
                    lineHeight={"short"}
                    as={motion.h1}
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: "5" }}
                >
                    Articles Related to Aesthetic Home Design
                </Text>
                <Flex
                    alignItems={"center"}
                    gap={2}
                    as={motion.h1}
                    initial={{ x: 30 }}
                    whileInView={{ x: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: "5" }}
                >
                    <Text
                        fontWeight={"thin"}
                        fontSize={{ base: "sm", md: "xl" }}
                        color={"blackAlpha.800"}
                        maxW={{ base: "full" }}
                    >
                        Explore All Blog
                    </Text>
                    <Icon
                        as={AiOutlineArrowRight}
                        w={{ base: 4, md: 6 }}
                        h={{ base: 4, md: 6 }}
                    />
                </Flex>
            </Flex>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                }}
                gap={{ base: 10, md: 16 }}
                mt={"5%"}
            >
                <GridItem w="100%">
                    <CardLarge
                        image={House1}
                        title={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nobis velit officiis harum, ut numquam et iste unde soluta perspiciatis voluptates. Voluptas harum quidem sit eligendi, totam fuga reiciendis earum?"
                        }
                        date={"20 August, 2022"}
                    />
                </GridItem>
                <GridItem w="100%">
                    <CardSmall
                        image={House1}
                        title={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                        date={"20 August, 2022"}
                    />
                    <Divider my={5} />
                    <CardSmall
                        image={House1}
                        title={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                        date={"20 August, 2022"}
                    />
                    <Divider my={5} />
                    <CardSmall
                        image={House1}
                        title={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                        date={"20 August, 2022"}
                    />
                </GridItem>
            </Grid>
        </Flex>
    );
}
