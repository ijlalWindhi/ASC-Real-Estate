import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type CardLargeType = {
    image: any;
    date: string;
    title: string;
    description: string;
};

export default function CardLarge({
    image,
    date,
    title,
    description,
}: CardLargeType) {
    return (
        <Box
            mt={{ base: 5, md: 0 }}
            w={"full"}
            as={motion.h1}
            whileHover={{ scale: 1.03 }}
            cursor={"pointer"}
        >
            <Image
                src={image}
                maxW={{ base: "full", md: "100%" }}
                rounded={"3xl"}
            />
            <Box maxW={"90%"} mt={{ base: 3 }}>
                <Text fontWeight={"thin"} fontSize={{ base: "xs", md: "sm" }}>
                    {date}
                </Text>
                <Text
                    fontWeight={"semibold"}
                    fontSize={{ base: "lg", md: "2xl" }}
                    my={{ base: 1, md: 2 }}
                >
                    {title}
                </Text>
                <Text fontWeight={"thin"} fontSize={{ base: "sm", md: "md" }}>
                    {description}
                </Text>
            </Box>
        </Box>
    );
}
