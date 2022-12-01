import React from 'react'
import {Flex, Text, Button} from '@chakra-ui/react'
import ImageContact from '../../assets/image-contacts.png'

export default function index() {
  return (
    <Flex
            px={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 20, md: 10 }}
            h="full"
            flexDir={"column"}
            bgImage={ImageContact}
            backgroundPosition={{base: "right bottom" }}
            backgroundRepeat="no-repeat"
            backgroundSize={"inherit"}
            bgColor={"#CAE7F4"}
            gap={{ base: 3, md: 5 }}
        >
            <Text fontSize={{ base: "md", md: "xl" }}>Find Home With Us</Text>
            <Text fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={"semibold"} maxW={{ md: "50%" }}>Find the right house over 400,000 property options</Text>
            <Button
              bgColor={"black"}
              color={"white"}
              _hover={{bgColor: "black"}}
              width={"fit-content"}
              rounded={"full"}
              px={16}
            >Find Now</Button>
        </Flex>
  )
}
