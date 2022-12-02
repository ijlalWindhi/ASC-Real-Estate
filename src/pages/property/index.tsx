import React from "react";
import {
    Flex,
    Text,
    Icon,
    Grid
} from "@chakra-ui/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import Card from "./fragments/Card";
import House1 from "../../assets/image-house.jpg"

export default function Hero() {
    return (
        <Flex
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={{ base: "column" }}
            bgColor={"#F7F9FF"}
        >
            <Text color={"blue.200"} mt={10}>PROPERTY</Text>
            <Flex justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }} gap={{ md: 10, lg: 10 }}>
                <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight={"medium"} maxW={{ base: "full", md: "80%", lg: "60%" }} lineHeight={'short'}>
                    Property in Cities and Provinces in Indonesia
                </Text>
                <Flex alignItems={"center"} gap={2}>
                    <Text fontWeight={"thin"} fontSize={{ base: "sm", md: "xl" }} color={"blackAlpha.800"} maxW={{ base: "full" }}>
                        Explore All Properties
                    </Text>
                    <Icon as={AiOutlineArrowRight} w={{ base: 4, md: 6 }} h={{ base: 4, md: 6 }} />
                </Flex>
            </Flex>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={{ base:4, sm: 5, md: 10 }} mt={"5%"}>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
                <Card price={"10.000"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} image={House1} button={["house", "negotable"]} bed={2} bath={4}/>
            </Grid>
        </Flex>
    );
}
