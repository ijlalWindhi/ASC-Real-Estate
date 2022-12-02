import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import Card from "./fragments/Card";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollRef = React.useRef(null);
    return (
        <Flex
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={"column"}
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
                WHY CHOOSE OLINAROM
            </Text>
            <Flex
                justifyContent={"space-between"}
                flexDir={{ base: "column", md: "row" }}
                gap={{ md: 10, lg: 10 }}
            >
                <Text
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight={"medium"}
                    maxW={{ base: "full", md: "50%", lg: "60%" }}
                    lineHeight={"short"}
                    as={motion.h1}
                    initial={{ y: -50 }}
                    whileInView={{ y: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: "5" }}
                >
                    Articles Related to Aesthetic Home Design
                </Text>
                <Text
                    fontWeight={"thin"}
                    fontSize={{ base: "sm", md: "xl" }}
                    maxW={{ base: "full", md: "50%", lg: "50%" }}
                    as={motion.h1}
                    initial={{ y: -50 }}
                    whileInView={{ y: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: "5" }}
                >
                    Find the ideal property that is most suitable for you.
                    Starting from houses for sale that are minimalist,
                    apartments for sale that are exclusive.
                </Text>
            </Flex>
            <Flex
                justifyContent={"space-between"}
                mt={"5%"}
                flexDir={{ base: "column", md: "row" }}
                as={motion.div}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ root: scrollRef }}
            >
                <Card
                    icon={IoHomeOutline}
                    title={"Find your dream house"}
                    description={
                        "Find the ideal property that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive."
                    }
                />
                <Card
                    icon={MdOutlineHomeWork}
                    title={"Find place of business"}
                    description={
                        "Find the ideal property that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive."
                    }
                />
                <Card
                    icon={IoWalletOutline}
                    title={"Smart feature rich"}
                    description={
                        "Find the ideal property that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive."
                    }
                />
            </Flex>
        </Flex>
    );
}
