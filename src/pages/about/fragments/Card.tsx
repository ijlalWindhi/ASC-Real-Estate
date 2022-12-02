import React from 'react'
import {Box, Icon, Text} from '@chakra-ui/react'

type CardType = {
    icon: any,
    description: string,
    title: string,
}

export default function Card({icon, title, description} : CardType) {
  return (
    <Box maxW={{ base: "full", md: "50%", lg:"30%" }} px={6} py={10} rounded={"xl"} _hover={{ boxShadow: "xl" }} textAlign={{ base: "center", md: "left" }}>
        <Icon as={icon} w={12} h={12} color={"blue.200"} />
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"semibold"} mt={8}>{title}</Text>
        <Text fontSize={"sm"} fontWeight={"light"}>{description}</Text>
    </Box>
  )
}
