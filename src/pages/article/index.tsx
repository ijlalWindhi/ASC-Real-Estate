import React from "react";
import {
    Flex,
    Text,
    Icon,
    Divider
} from "@chakra-ui/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import House1 from "../../assets/image-house.jpg"
import CardLarge from "./fragments/CardLarge";
import CardSmall from "./fragments/CardSmall";

export default function Hero() {
    return (
        <Flex
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={{ base: "column" }}
        >
            <Text color={"blue.200"} mt={10}>BLOGS</Text>
            <Flex justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }}>
                <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight={"medium"} maxW={{ base: "full", md: "40%" }} lineHeight={'short'}>
                    Articles Related to Aesthetic Home Design
                </Text>
                <Flex alignItems={"center"} gap={2}>
                    <Text fontWeight={"thin"} fontSize={{ base: "sm", md: "xl" }} color={"blackAlpha.800"} maxW={{ base: "full", md: "40%" }}>
                        Explore All Blog
                    </Text>
                    <Icon as={AiOutlineArrowRight} w={{ base: 4, md: 6 }} h={{ base: 4, md: 6 }} />
                </Flex>
            </Flex>
            <Flex gap={{ base: 10, md: 16 }} mt={"5%"} alignItems={"center"} flexDir={{ base: "column", md: "row" }}>
                <CardLarge image={House1} title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nobis velit officiis harum, ut numquam et iste unde soluta perspiciatis voluptates. Voluptas harum quidem sit eligendi, totam fuga reiciendis earum?"} date={"20 August, 2022"} />
                <Flex flexDirection={"column"} gap={10}>
                    <CardSmall image={House1} title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} date={"20 August, 2022"} />
                    <Divider/>
                    <CardSmall image={House1} title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} date={"20 August, 2022"} />
                    <Divider/>
                    <CardSmall image={House1} title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} date={"20 August, 2022"} />
                </Flex>
            </Flex>
        </Flex>
    );
}
