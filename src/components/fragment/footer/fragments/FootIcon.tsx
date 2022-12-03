import React from "react";
import { Icon, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function FootIcon({ icon }: any) {
    return (
        <Box
            as={motion.div}
            initial={{ size: 1 }}
            whileHover={{ scale: 1.1 }}
            cursor={"pointer"}
        >
            <Icon as={icon} w={5} h={5} />
        </Box>
    );
}
