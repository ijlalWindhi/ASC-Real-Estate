import React, { useEffect } from "react";
import { Box, IconButton, Icon, Text, Image, Flex } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiBed, BiBath } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";

type CardType = {
    description: string;
    price: string;
    image: any;
    button: [string, string];
    bed: number;
    bath: number;
    id: string;
};

export default function Card({
    price,
    description,
    image,
    button,
    bed,
    bath,
    id,
}: CardType) {
    const scrollRef = React.useRef(null);
    const bg = useColorModeValue("white", "gray.800");
    const bgTag = useColorModeValue("gray.100", "gray.700");
    const color = useColorModeValue("gray.800", "white");

    const getLike = localStorage.getItem("like");
    const [like, setLike] = React.useState(false);
    const [likeCount, setLikeCount] = React.useState(0);
    const likeHandler = () => {
        setLike(!like);
        if (like) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
    };

    useEffect(() => {
        if (getLike) {
            setLikeCount(JSON.parse(getLike));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("like", JSON.stringify(likeCount));
    }, [likeCount]);

    return (
        <Box
            maxW={"100%"}
            px={3}
            py={3}
            rounded={"xl"}
            bg={bg}
            color={color}
            _hover={{ boxShadow: "xl" }}
            overflow={"clip"}
            mx={"auto"}
            as={motion.h1}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            whileHover={{ y: -20 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: "5" }}
            cursor={"pointer"}
        >
            <Box position={"relative"}>
                <Image
                    src={image}
                    w={"full"}
                    color={"blue.200"}
                    rounded={"xl"}
                />
                <IconButton
                    aria-label="like"
                    position={"absolute"}
                    top={3}
                    right={3}
                    bgColor={"white"}
                    color={"red.500"}
                    rounded={"full"}
                    icon={<Icon as={like ? AiFillHeart : AiOutlineHeart} />}
                    onClick={likeHandler}
                />
            </Box>
            <Link to={`/detail-property/${id}`}>
                <Flex my={4}>
                    {button.map((item, index) => {
                        return (
                            <Text
                                key={index}
                                textTransform={"capitalize"}
                                bg={bgTag}
                                color={color}
                                fontWeight={"thin"}
                                fontSize={"sm"}
                                mr={2}
                                px={2}
                                rounded={"full"}
                            >
                                {item}
                            </Text>
                        );
                    })}
                </Flex>
                <Flex justifyContent={"space-between"}>
                    <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight={"semibold"}
                    >
                        ${price}
                    </Text>
                    <Text fontSize={"sm"} fontWeight={"normal"}>
                        Like: {likeCount}
                    </Text>
                </Flex>
                <Text
                    fontSize={"sm"}
                    fontWeight={"normal"}
                    w={"fit-content"}
                    h={"6"}
                    overflow={"clip"}
                >
                    {description}
                </Text>
                <Flex mt={4} justifyContent={"space-between"}>
                    <Flex alignItems={"center"}>
                        <Icon
                            as={BiBed}
                            w={6}
                            h={6}
                            color={"blue.400"}
                            bgColor={"blue.100"}
                            p={1}
                            mr={1}
                            rounded={"full"}
                        />
                        <Text fontSize={"sm"}>{bed} bedroom</Text>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <Icon
                            as={BiBath}
                            w={6}
                            h={6}
                            color={"blue.400"}
                            bgColor={"blue.100"}
                            p={1}
                            mr={1}
                            rounded={"full"}
                        />
                        <Text fontSize={"sm"}>{bath} bathroom</Text>
                    </Flex>
                </Flex>
            </Link>
        </Box>
    );
}
