import React from "react";
import { Flex, Text, Icon, Grid } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card from "./fragments/Card";
import { motion } from "framer-motion";
import { data } from "./fragments/DummyData";
import { useColorModeValue } from "@chakra-ui/react";

export default function Hero() {
    const scrollRef = React.useRef(null);
    const bg = useColorModeValue("#F7F9FF", "gray.700");
    const color = useColorModeValue("gray.700", "#F7F9FF");
    return (
        <Flex
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={{ base: "column" }}
            bg={bg}
            color={color}
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
                PROPERTY
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
                    Property in Cities and Provinces in Indonesia
                </Text>
                <Flex
                    alignItems={"center"}
                    gap={2}
                    as={motion.h1}
                    initial={{ x: 30 }}
                    whileInView={{ x: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: "5" }}
                    cursor={"pointer"}
                    whileHover={{ x: 10 }}
                >
                    <Text
                        fontWeight={"thin"}
                        fontSize={{ base: "sm", md: "xl" }}
                        maxW={{ base: "full" }}
                    >
                        Explore All Properties
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
                    lg: "repeat(3, 1fr)",
                }}
                gap={{ base: 4, sm: 5, md: 10 }}
                mt={"5%"}
            >
                {data.map((item) => (
                    <Card
                        id={item.id}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                        button={["house", "negotable"]}
                        bed={item.bed}
                        bath={item.bath}
                    />
                ))}
            </Grid>
        </Flex>
    );
}
