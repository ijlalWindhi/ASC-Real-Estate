import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

type FootType = {
    title: string;
    path: string;
};

export default function FootItem({ title, path }: FootType) {
    return (
        <Link to={path} smooth={true} duration={500}>
            <Text
                fontSize={"md"}
                fontWeight={"light"}
                cursor={"pointer"}
                color={"white"}
                as={motion.div}
                initial={{ x: 1 }}
                whileHover={{ x: 10 }}
            >
                {title}
            </Text>
        </Link>
    );
}
