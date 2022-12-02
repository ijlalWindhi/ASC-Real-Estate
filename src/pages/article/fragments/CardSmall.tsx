import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

type CardLargeType = {
    image: any;
    date: string;
    title: string;
};

export default function CardSmall({ image, date, title }: CardLargeType) {
    return (
        <Box
            mt={{ base: 5, md: 0 }}
            w={"full"}
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            as={motion.div}
            whileHover={{ scale: 1.03 }}
        >
            <Box
                w={{ base: "full", md: "full" }}
                my={"auto"}
                h={{ base: "40", md: 36 }}
                rounded={"3xl"}
                bgImage={image}
                bgPosition={"center"}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
            ></Box>
            <Box maxW={"90%"} mt={{ base: 3 }} ml={3}>
                <Text fontWeight={"thin"} fontSize={{ base: "xs", md: "sm" }}>
                    {date}
                </Text>
                <Text
                    fontWeight={"semibold"}
                    fontSize={{ base: "lg", md: "xl" }}
                    my={{ base: 1, md: 2 }}
                >
                    {title}
                </Text>
            </Box>
        </Box>
    );
}
