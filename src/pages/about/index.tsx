import React from "react";
import {
    Flex,
    Text,
} from "@chakra-ui/react";
import {IoHomeOutline, IoWalletOutline} from "react-icons/io5";
import {MdOutlineHomeWork} from "react-icons/md";
import Card from "./fragments/Card";

export default function Hero() {
    return (
        <Flex
            // alignItems={{ md: "center" }}
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={"column" }
        >
            <Text color={"blue.200"} mt={10}>WHY CHOOSE OLINAROM</Text>
            <Flex justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }} gap={{ base: 4, md: 0 }}>
                <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight={"medium"} maxW={{ base: "full", md: "40%" }} lineHeight={'short'}>
                    Provides the most complate list of property
                </Text>
                <Text fontWeight={"thin"} fontSize={{ base: "sm", md: "xl" }} color={"blackAlpha.800"} maxW={{ base: "full", md: "40%" }}>
                    Find the ideal property that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive.
                </Text>
            </Flex>
            <Flex justifyContent={"space-between"} mt={"5%"} flexDir={{ base: "column", md: "row" }}>
                <Card icon={IoHomeOutline} title={"Find your dream house"} description={"Find the ideal property that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive."} />
                <Card icon={MdOutlineHomeWork} title={"Find place of business"} description={"Find the ideal property that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive."} />
                <Card icon={IoWalletOutline} title={"Smart feature rich"} description={"Find the ideal property that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive."} />
            </Flex>
        </Flex>
    );
}
