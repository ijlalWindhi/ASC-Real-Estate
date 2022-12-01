import React from 'react'
import {Flex, Box, Text, Icon} from '@chakra-ui/react'
import FootItem from './fragments/FootItem'
import {FaFacebookF, FaTwitter, FaInstagram, FaTelegram} from 'react-icons/fa'

export default function index() {
  return (
    <Flex bgColor={"black"} px={{ base: 10, md: 20, lg: 32 }} py={{ base: 5, md: 10 }} justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }} gap={{ base: 10, md: 0 }}>
        <Box color={"white"}>
            <Text fontSize={"3xl"} fontWeight={"semibold"}>Olinarom</Text>
            <Text my={5}>Jl. Raya Meruyalir no 88, <br />
                Kebun Jeruk, Jakarta Barat, <br />
                Jakarta11620, Indonesia
            </Text>
            <Flex justifyContent={"space-between"} maxW={{ base: "50%", md: "full" }}>
                <Icon as={FaFacebookF} w={5} h={5} color={"white"} />
                <Icon as={FaInstagram} w={5} h={5} color={"white"} />
                <Icon as={FaTwitter} w={5} h={5} color={"white"} />
                <Icon as={FaTelegram} w={5} h={5} color={"white"} />
            </Flex>
        </Box>
        <Flex gap={{ base: 10, md: 20 }} flexDir={{ base: "column", md: "row" }}>
            <Box display={"flex"} flexDirection={"column"} gap={{ base: 3, md: 6 }}>
                <FootItem title={"Home"} path={"hero"} />
                <FootItem title={"For sell"} path={"about"} />
                <FootItem title={"For rent"} path={"property"} />
                <FootItem title={"New Property"} path={""} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={{ base: 3, md: 6 }}>
                <FootItem title={"Blogs"} path={"hero"} />
                <FootItem title={"KPR"} path={"about"} />
                <FootItem title={"Referral"} path={"property"} />
                <FootItem title={"FAQs"} path={""} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={{ base: 3, md: 6 }}>
                <FootItem title={"Privacy & Policy"} path={"hero"} />
                <FootItem title={"Term & Condition"} path={"about"} />
                <FootItem title={"Contact Us"} path={"property"} />
                <FootItem title={"Cookies Policy"} path={""} />
            </Box>
        </Flex>
    </Flex>
  )
}
