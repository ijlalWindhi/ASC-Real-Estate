import React, { useEffect } from "react";
import { Text, Icon, Flex, Grid, GridItem } from "@chakra-ui/react";
import ImageHero from "../../../assets/images-hero.png";
import { GoLocation } from "react-icons/go";
import { BiDollar, BiSearch } from "react-icons/bi";
import { MdHomeWork } from "react-icons/md";
import Navigation from "./fragments/Navigation";
import Title from "./fragments/Title";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";
import Weather from "./fragments/Weather";

export default function Hero() {
    const scrollRef = React.useRef(null);
    const bg = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.800", "gray.800");
    const [count, setCount] = React.useState(0);
    const getVisitor = localStorage.getItem("visitorCounter");
    const incrementVisitor = count + 1;

    useEffect(() => {
        if (getVisitor) {
            setCount(JSON.parse(getVisitor));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "visitorCounter",
            JSON.stringify(incrementVisitor)
        );
    }, [incrementVisitor]);

    return (
        <Flex
            justifyContent={{ base: "flex-end", md: "space-between" }}
            alignItems={{ md: "center" }}
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            minH={"98vh"}
            h="full"
            direction={{ base: "column-reverse", md: "row" }}
            bgImage={ImageHero}
            backgroundPosition={{ base: "right bottom" }}
            backgroundRepeat="no-repeat"
            backgroundSize={"contain"}
            bgColor={"#CAE7F4"}
            id={"hero"}
        >
            <Flex flexDir={"column"} gap={{ base: 7, md: 10 }} color={color}>
                <Text
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                    fontWeight={"medium"}
                    maxW={"xl"}
                    as={motion.h1}
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: "5" }}
                >
                    Discover a place you will love to live
                </Text>
                <Text
                    fontSize={{ base: "sm", md: "lg" }}
                    fontWeight={"light"}
                    maxW={{ base: "100%", lg: "70%" }}
                    as={motion.h1}
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: "5" }}
                >
                    Connect with more than 75 million renters looking for new
                    home using our comprehensive marketing platform
                </Text>
                <Grid
                    maxW={{ base: "full", md: "fit-content" }}
                    py={{ base: 2, md: 3 }}
                    pl={{ base: 2.5, md: 3, lg: 10 }}
                    gap={{ base: 4, md: 6, lg: 10 }}
                    rounded={"xl"}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(4, 1fr)",
                    }}
                    overflow={"clip"}
                    bg={bg}
                    color={color}
                >
                    <Navigation
                        icon={GoLocation}
                        heading={"Location"}
                        title={"Bali, Indonesia"}
                    />
                    <Navigation
                        icon={BiDollar}
                        heading={"Price"}
                        title={"$5,000-$10.000"}
                    />
                    <Navigation
                        icon={MdHomeWork}
                        heading={"Type of home"}
                        title={"Apartment"}
                    />
                    <GridItem
                        colSpan={{ base: 1, md: 3, lg: 1 }}
                        pr={2}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"flex-end"}
                        bg={bg}
                        color={color}
                    >
                        <Icon
                            as={BiSearch}
                            w={{ base: "full", lg: 12 }}
                            h={{ base: 8, md: 12 }}
                            bgColor={"black"}
                            color={"white"}
                            p={2}
                            rounded={{ base: "lg", md: "2xl" }}
                        />
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    }}
                >
                    <Title heading={1500} title={"Property Ready"} />
                    <Title heading={500} title={"Happy Customer"} />
                    <Title heading={count} title={"Visitor"} />
                </Grid>
                <Weather />
            </Flex>
        </Flex>
    );
}
