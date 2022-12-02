import React from "react";
import { Flex, Text, Button, Box, useColorModeValue } from "@chakra-ui/react";
import ImageContact from "../../../assets/image-contacts.png";
import { motion } from "framer-motion";

export default function index() {
    const scrollRef = React.useRef(null);
    const bg = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.800", "gray.800");
    const colorButton = useColorModeValue("gray.800", "white");
    return (
        <Flex
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 20, md: 10 }}
            h="full"
            flexDir={"column"}
            bgImage={ImageContact}
            backgroundPosition={{ base: "right bottom" }}
            backgroundRepeat="no-repeat"
            backgroundSize={"inherit"}
            bgColor={"#CAE7F4"}
        >
            <Box
                as={motion.div}
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: "5" }}
                color={color}
            >
                <Text fontSize={{ base: "md", md: "xl" }}>
                    Find Home With Us
                </Text>
                <Text
                    fontSize={{ base: "3xl", lg: "5xl" }}
                    fontWeight={"semibold"}
                    maxW={{ md: "50%" }}
                    my={5}
                >
                    Find the right house over 400,000 property options
                </Text>
                <Button
                    _hover={{ bgColor: "black" }}
                    width={"fit-content"}
                    rounded={"full"}
                    px={16}
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    bg={bg}
                    color={colorButton}
                >
                    Find Now
                </Button>
            </Box>
        </Flex>
    );
}
