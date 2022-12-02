import React from "react";
import {
    Box,
    Heading,
    Flex,
    Icon,
    Stack,
    Button,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import NavItem from "./fragments/NavItem";
import {X, AlignRight} from "react-feather";

export default function index() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                py={4}
                px={{ base: 10, md: 10, lg: 16 }}
                bgColor={"white"}
            >
                <Flex
                    justifyContent={{ base: "space-between" }}
                    w={"full"}
                    my="auto"
                    alignItems={"center"}
                >
                    <Heading
                        textTransform={"capitalize"}
                        fontWeight={"bold"}
                        fontSize={{ base: "2xl", md: "3xl" }}
                    >
                        olinarom
                    </Heading>
                    <Icon
                        as={isOpen ? X : AlignRight}
                        onClick={isOpen ? onClose : onOpen}
                        display={{ md: "none" }}
                        w={6}
                        h={6}
                    />
                </Flex>
                <Flex gap={{ md: 5, lg: 8 }} display={{ base: "none", md: "flex" }} minW={"fit-content"}>
                    <NavItem title={"For sell"} path="home" />
                    <NavItem title={"For rent"} path={"workflow"} />
                    <NavItem title={"New Property"} path={"portfolio"} />
                    <NavItem title={"Blogs"} path={"contacts"} />
                    <NavItem title={"KPR"} path={"contacts"} />
                </Flex>
                <Box w={"full"} justifyContent={"right"} display={{ base: "none", md: "flex" }}>
                    <Button justifyContent={"center"} bgColor={"black"} rounded={"full"} px={{ md: 4, lg: 10 }} _hover={{ bgColor: "black" }}>
                        <Text
                            color={"white"}
                            fontSize={{ base: "lg", md: "sm", lg: "md" }}
                            fontWeight={"normal"}
                            cursor={"pointer"}
                        >
                            Login/Register
                        </Text>
                    </Button>
                </Box>
            </Box>
            {isOpen ? (
                <Box
                    py={4}
                    display={{ md: "none" }}
                    textAlign={"center"}
                    position={"absolute"}
                    w={"full"}
                    className={"glassmorphism"}
                    bgColor={"white"}
                >
                    <Stack as={"nav"} spacing={[4]}>
                        <NavItem title="For sell" path="home" />
                        <NavItem title={"For rent"} path={"workflow"} />
                        <NavItem title={"New Property"} path={"portfolio"} />
                        <NavItem title={"Blogs"} path={"contacts"} />
                        <NavItem title={"KPR"} path={"contacts"} />
                        <Flex justifyContent={"center"}>
                            <Button bgColor={"black"} rounded={"full"} px={10} _hover={{ bgColor: "black" }} maxW={"50%"}>
                                <Text
                                    color={"white"}
                                    fontSize={"md"}
                                    fontWeight={"normal"}
                                    cursor={"pointer"}
                                >
                                    Login / Register
                                </Text>
                            </Button>
                        </Flex>
                    </Stack>
                </Box>
            ) : null}
        </>
    );
}