import React from "react";
import {
    Box,    
    Text,
    Icon,
    Flex,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import ImageHero from "../../assets/images-hero.png";
import {GoLocation} from "react-icons/go";
import {BiDollar, BiSearch} from "react-icons/bi";
import {MdHomeWork} from "react-icons/md";
import Navigation from "./fragments/Navigation";
import Title from "./fragments/Title";

export default function Hero() {
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
            backgroundPosition={{base: "right bottom" }}
            backgroundRepeat="no-repeat"
            backgroundSize={"contain"}
            bgColor={"#CAE7F4"}
            id={"hero"}
        >
            <Flex flexDir={"column"} gap={{ base: 7, md: 10 }}>
                <Text
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                    fontWeight={"medium"}
                    maxW={"xl"}
                >
                    Discover a place you will love to live
                </Text>
                <Text
                    fontSize={{ base: "sm", md: "lg" }}
                    fontWeight={"light"}
                    maxW={{ base: "100%", lg: "70%" }}
                >
                    Connect with more than 75 million renters looking for new home using our comprehensive marketing platform
                </Text>
                <Grid bgColor={"white"} maxW={{ base: "full", md: "fit-content" }} py={{ base: 2, md: 3 }} pl={{ base: 2.5, md: 10 }} gap={{ base: 4, md: 6,lg: 10 }} rounded={"xl"} justifyContent={{ base: "center", md: "flex-start" }} templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)'}} overflow={"clip"}>
                    <Navigation icon={GoLocation} heading={"Location"} title={"Bali, Indonesia"} />
                    <Navigation icon={BiDollar} heading={"Price"} title={"$5,000-$10.000"} />
                    <Navigation icon={MdHomeWork} heading={"Type of home"} title={"Apartment"} />
                    <GridItem colSpan={{ base: 4, md: 1 }} pr={2} display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                        <Icon as={BiSearch} w={{ base: "full", md: 12 }} h={{ base: 8, md: 12 }} bgColor={"black"} color={"white"} p={2} rounded={{ base: "lg", md: "2xl" }} />
                    </GridItem>
                </Grid>
                <Flex>
                    <Title heading={"1500+"} title={"Property Ready"} />
                    <Title heading={"500+"} title={"Happy Customer"} />
                </Flex>
            </Flex>
        </Flex>
    );
}
