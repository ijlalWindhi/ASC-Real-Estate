import React from 'react'
import {Flex, Text, Box} from '@chakra-ui/react'

type CardLargeType = {
    image: any,
    date: string,
    title: string,
}

export default function CardSmall({image, date, title} : CardLargeType) {
  return (
    <Flex flexDir={{ base: "column", md: "row" }}>
        <Box w={{ base: "full" , md: "md" }} h={{ base: "40", md: 36 }} rounded={"3xl"} bgImage={image} bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"cover"}></Box>
        <Flex maxW={{ base: "100%", md: "80%" }} flexDirection={"column"} ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
            <Text fontWeight={"thin"} fontSize={{ base: "xs", md: "sm" }}>{date}</Text>
            <Text fontWeight={"semibold"} fontSize={{ base: "lg", md: "2xl" }}>{title}</Text>
        </Flex>
    </Flex>
  )
}