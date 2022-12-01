import React from 'react'
import {Box, Icon, Text, Image, Flex} from '@chakra-ui/react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiBed, BiBath} from 'react-icons/bi'

type CardType = {
    description: string,
    price: string,
    image: any,
    button: [string, string],
    bed: number,
    bath: number
}

export default function Card({ price, description, image, button, bed, bath} : CardType) {
  return (
    <Box maxW={"100%"} px={3} py={3} rounded={"xl"} bgColor={"white"} _hover={{ boxShadow: "xl" }}>
      <Box position={"relative"}>
        <Image src={image} w={"full"} color={"blue.200"} rounded={"xl"}/>
        <Icon as={AiOutlineHeart} position={"absolute"} top={0} right={0} w={8} h={8} p={1} mr={2} mt={2} bgColor={"white"} rounded={"full"} />
      </Box>
      <Flex my={4}>
      {
        button.map((item, index) => {
          return (
            <Text textTransform={"capitalize"} bgColor={"gray.100"} fontWeight={"thin"} fontSize={"sm"} mr={2} px={2} rounded={"full"}>{item}</Text>
          )
        })
      }
      </Flex>
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"semibold"}>${price}</Text>
      <Text fontSize={"sm"} fontWeight={"normal"} overflow={"clip"}>{description}</Text>
      <Flex mt={4}>
        <Flex alignItems={"center"} mr={4}>
          <Icon as={BiBed} w={6} h={6} color={"blue.400"} bgColor={"blue.100"} p={1} mr={1} rounded={"full"}/>
          <Text fontSize={"sm"} >{bed} bedroom</Text>
        </Flex>
        <Flex alignItems={"center"} mr={4}>
          <Icon as={BiBed} w={6} h={6} color={"blue.400"} bgColor={"blue.100"} p={1} mr={1} rounded={"full"}/>
          <Text fontSize={"sm"} >{bath} bathroom</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
