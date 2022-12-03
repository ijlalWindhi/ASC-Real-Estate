import React from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Image,
    Icon,
    Text,
    Grid,
    GridItem,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { BiBed, BiBath } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/fragment/navbar";
import { data } from "./DummyData";
import { motion } from "framer-motion";

export default function DetailProperty() {
    const { id } = useParams();
    const property = data.find((item) => item.id === id);
    const navigate = useNavigate();
    const bg = useColorModeValue("gray.100", "gray.700");
    const color = useColorModeValue("gray.700", "gray.100");

    return (
        <Box w={"full"} minH={"100vh"}>
            <Navbar />
            <Box
                px={{ base: 10, md: 20, lg: 32 }}
                py={{ base: 5, md: 10 }}
                minH={"90vh"}
                display={"flex"}
                alignItems={"center"}
            >
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                    }}
                    gap={{ base: 8, sm: 10, md: 14, lg: 16 }}
                >
                    <GridItem
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Image src={property?.image} rounded={"2xl"} />
                    </GridItem>
                    <GridItem
                        as={motion.div}
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                    >
                        <Text
                            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                            fontWeight={"medium"}
                        >
                            {property?.title}
                        </Text>
                        <Box my={{ base: 4, md: 6 }}>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                fontWeight={"medium"}
                            >
                                Description:
                            </Text>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                fontWeight={"light"}
                            >
                                {property?.description}
                            </Text>
                        </Box>
                        <Box my={{ base: 4, md: 6 }}>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                fontWeight={"medium"}
                            >
                                Price:
                            </Text>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                fontWeight={"light"}
                                color={color}
                                bgColor={bg}
                                w={"fit-content"}
                                py={2}
                                px={6}
                                rounded={"full"}
                                mt={2}
                            >
                                $ {property?.price}
                            </Text>
                        </Box>
                        <Box my={{ base: 4, md: 6 }}>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                fontWeight={"medium"}
                            >
                                Tag:
                            </Text>
                            <Box display={"flex"} gap={2} mt={2}>
                                {property?.button.map((item) => {
                                    return (
                                        <Text
                                            fontSize={{
                                                base: "sm",
                                                md: "md",
                                                lg: "lg",
                                            }}
                                            fontWeight={"light"}
                                            color={color}
                                            bgColor={bg}
                                            w={"fit-content"}
                                            py={2}
                                            px={6}
                                            rounded={"full"}
                                        >
                                            {item}
                                        </Text>
                                    );
                                })}
                            </Box>
                        </Box>
                        <Box my={{ base: 4, md: 6 }}>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                fontWeight={"medium"}
                            >
                                Room:
                            </Text>
                            <Box display={"flex"} gap={2}>
                                <Box
                                    color={color}
                                    bgColor={bg}
                                    w={"fit-content"}
                                    py={2}
                                    px={6}
                                    rounded={"full"}
                                    mt={2}
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={2}
                                >
                                    <Icon as={BiBed} w={5} h={5} />
                                    <Text
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        fontWeight={"light"}
                                    >
                                        {property?.bed}
                                    </Text>
                                </Box>
                                <Box
                                    color={color}
                                    bgColor={bg}
                                    w={"fit-content"}
                                    py={2}
                                    px={6}
                                    rounded={"full"}
                                    mt={2}
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={2}
                                >
                                    <Icon as={BiBath} w={5} h={5} />
                                    <Text
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        fontWeight={"light"}
                                    >
                                        {property?.bath}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Button
                            color={color}
                            bgColor={bg}
                            my={{ base: 4, md: 6 }}
                            px={10}
                            py={2}
                            rounded={"full"}
                            onClick={() => navigate("/")}
                            leftIcon={<IoChevronBack />}
                            fontWeight={"medium"}
                        >
                            Back
                        </Button>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}
