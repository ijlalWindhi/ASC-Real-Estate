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
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import NavItem from "./fragments/NavItem";
import { X, AlignRight, Sun, Moon } from "react-feather";
import { Link } from "react-router-dom";
import { checkLogged, LOCAL_STORAGE_USER } from "../../../utils/constants";
import { getLocalStorage } from "../../../utils/helper/LocalStorage";
import ModalLogout from "../modal";

export default function index() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isLogoutOpen,
        onOpen: onLogoutOpen,
        onClose: onLogoutClose,
    } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("black", "white");
    const color = useColorModeValue("white", "black");
    const [user, setUser] = React.useState<any>(null);

    React.useEffect(() => {
        const user = getLocalStorage(LOCAL_STORAGE_USER);
        setUser(user);
    }, []);

    return (
        <>
            <ModalLogout
                isOpen={isLogoutOpen}
                onOpen={onLogoutOpen}
                onClose={onLogoutClose}
            />
            <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                py={4}
                px={{ base: 10, md: 10, lg: 16 }}
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
                <Flex
                    gap={{ md: 5, lg: 8 }}
                    display={{ base: "none", md: "flex" }}
                    minW={"fit-content"}
                >
                    <NavItem title={"For sell"} path="home" />
                    <NavItem title={"For rent"} path={"workflow"} />
                    <NavItem title={"New Property"} path={"portfolio"} />
                    <NavItem title={"Blogs"} path={"contacts"} />
                    <NavItem title={"KPR"} path={"contacts"} />
                </Flex>
                <Box
                    w={"full"}
                    justifyContent={"right"}
                    display={{ base: "none", md: "flex" }}
                    alignItems={"center"}
                >
                    <Button
                        onClick={toggleColorMode}
                        variant={"ghost"}
                        colorScheme={"white"}
                        size={"sm"}
                        fontWeight={"normal"}
                        p={4}
                    >
                        <Icon
                            as={colorMode === "light" ? Moon : Sun}
                            w={6}
                            h={6}
                        />
                    </Button>
                    {checkLogged() ? (
                        <Flex>
                            <Text w={"50%"} overflow={"clip"}>
                                Hello, {user}
                            </Text>
                            <Button
                                justifyContent={"center"}
                                color={color}
                                bg={bg}
                                rounded={"full"}
                                px={{ md: 4, lg: 8 }}
                                _hover={
                                    colorMode === "light"
                                        ? {
                                              bg: "blackAlpha.800",
                                              color: "white",
                                          }
                                        : {
                                              bg: "whiteAlpha.800",
                                              color: "black",
                                          }
                                }
                                onClick={onLogoutOpen}
                            >
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "sm",
                                        lg: "md",
                                    }}
                                    fontWeight={"normal"}
                                    cursor={"pointer"}
                                >
                                    Logout
                                </Text>
                            </Button>
                        </Flex>
                    ) : (
                        <Link to="/login">
                            <Button
                                justifyContent={"center"}
                                color={color}
                                bg={bg}
                                rounded={"full"}
                                px={{ md: 4, lg: 10 }}
                                _hover={
                                    colorMode === "light"
                                        ? {
                                              bg: "blackAlpha.800",
                                              color: "white",
                                          }
                                        : {
                                              bg: "whiteAlpha.800",
                                              color: "black",
                                          }
                                }
                            >
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "sm",
                                        lg: "md",
                                    }}
                                    fontWeight={"normal"}
                                    cursor={"pointer"}
                                >
                                    Login/Register
                                </Text>
                            </Button>
                        </Link>
                    )}
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
                    bg={bg}
                    color={color}
                >
                    <Stack as={"nav"} spacing={[4]}>
                        <NavItem title="For sell" path="home" />
                        <NavItem title={"For rent"} path={"workflow"} />
                        <NavItem title={"New Property"} path={"portfolio"} />
                        <NavItem title={"Blogs"} path={"contacts"} />
                        <NavItem title={"KPR"} path={"contacts"} />
                        <Flex justifyContent={"center"}>
                            <Button
                                onClick={toggleColorMode}
                                variant={"ghost"}
                                colorScheme={"white"}
                                size={"sm"}
                                fontWeight={"normal"}
                                p={4}
                            >
                                <Icon
                                    as={colorMode === "light" ? Moon : Sun}
                                    w={6}
                                    h={6}
                                />
                            </Button>
                        </Flex>
                        <Flex justifyContent={"center"}>
                            {checkLogged() ? (
                                <Flex flexDir={"column"} gap={3}>
                                    <Text maxW={"100%"}>Hello, {user}</Text>
                                    <Button
                                        justifyContent={"center"}
                                        color={bg}
                                        bg={color}
                                        rounded={"full"}
                                        px={{ md: 4, lg: 8 }}
                                        _hover={
                                            colorMode === "light"
                                                ? {
                                                      bg: "white",
                                                      color: "blackAlpha.800",
                                                  }
                                                : {
                                                      bg: "black",
                                                      color: "whiteAlpha.800",
                                                  }
                                        }
                                        onClick={onLogoutOpen}
                                    >
                                        <Text
                                            fontSize={{
                                                base: "lg",
                                                md: "sm",
                                                lg: "md",
                                            }}
                                            fontWeight={"normal"}
                                            cursor={"pointer"}
                                        >
                                            Logout
                                        </Text>
                                    </Button>
                                </Flex>
                            ) : (
                                <Link to="/login">
                                    <Button
                                        justifyContent={"center"}
                                        color={bg}
                                        bg={color}
                                        rounded={"full"}
                                        px={{ base: 6 }}
                                        _hover={
                                            colorMode === "light"
                                                ? {
                                                      bg: "white",
                                                      color: "blackAlpha.800",
                                                  }
                                                : {
                                                      bg: "black",
                                                      color: "whiteAlpha.800",
                                                  }
                                        }
                                    >
                                        <Text
                                            fontSize={{
                                                base: "lg",
                                                md: "sm",
                                                lg: "md",
                                            }}
                                            fontWeight={"normal"}
                                            cursor={"pointer"}
                                        >
                                            Login/Register
                                        </Text>
                                    </Button>
                                </Link>
                            )}
                        </Flex>
                    </Stack>
                </Box>
            ) : null}
        </>
    );
}
