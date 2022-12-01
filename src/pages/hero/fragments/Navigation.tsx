import React from 'react'
import {Icon, Flex, Box, Text} from "@chakra-ui/react"

type NavigationType = {
    icon: any,
    heading: string,
    title: string
}

export default function Navigation({icon, heading, title} : NavigationType) {
  return (
    <Flex alignItems={"center"} w={"fit-content"} overflow={"clip"}>
        <Icon as={icon} w={{ base: 6, md: 10 }} h={{ base: 6, md: 10 }} bgColor={"blue.100"} color={"blue.500"} p={{ base: 1, md: 2 }} rounded={"full"}/>
        <Box ml={{ base:1, md: 3 }}>
            <Text fontWeight={"normal"} fontSize={{ base: "sm" }}>{heading}</Text>
            <Text fontSize={{ base: "xs", md:"sm" }} color={"blackAlpha.500"}>{title}</Text>
        </Box>
    </Flex>
  )
}