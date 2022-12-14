import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

type NavItemsType = {
    title: string;
    path: string;
};

export default function NavItem({ title, path }: NavItemsType) {
    return (
        <Link to={path} smooth={true}>
            <Text
                fontSize={{ base: "lg", md: "sm", lg: "md" }}
                fontWeight={"light"}
                cursor={"pointer"}
            >
                {title}
            </Text>
        </Link>
    );
}
