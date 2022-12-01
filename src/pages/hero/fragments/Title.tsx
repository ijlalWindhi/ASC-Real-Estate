import React from 'react'
import {Flex, Heading, Text} from "@chakra-ui/react"

type TitleType = {
    heading: string,
    title: string
}

export default function Title({heading, title} : TitleType) {
  return (
    <Flex gap={4} alignItems={"center"}>
        <Text fontSize={{ base: "xl", md: "4xl" }} fontWeight={"semibold"}>{heading}</Text>
        <Text maxW={"40%"} fontWeight={"light"} fontSize={"sm"} lineHeight={"4"}>{title}</Text>
    </Flex>
  )
}
