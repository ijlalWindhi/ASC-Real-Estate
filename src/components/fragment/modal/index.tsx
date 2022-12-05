import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Text,
    ModalFooter,
    Button,
    Center,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import { clearLocalStorage } from "../../../utils/helper/LocalStorage";
import ImageLogout from "../../../assets/image-logout.svg";

type propsType = {
    isOpen: any;
    onClose: any;
    onOpen: any;
};

export default function index({ isOpen, onClose, onOpen }: propsType) {
    const bg = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.800", "white");

    const handleLogout = () => {
        clearLocalStorage();
        onClose();
    };

    const _handleLogout = () => {
        clearLocalStorage();
        location.reload();
    };

    return (
        <>
            <Modal
                size="sm"
                isOpen={isOpen}
                onClose={onClose}
                blockScrollOnMount={false}
                isCentered
            >
                <ModalOverlay />
                <ModalContent borderRadius="3xl" py={8}>
                    <ModalBody alignItems="center" textAlign="center">
                        <Center>
                            <Image
                                src={ImageLogout}
                                w={["80%", "70%", "60%"]}
                            />
                        </Center>
                        <Text as="h3" fontSize={23} fontWeight={600}>
                            Logout Account
                        </Text>
                        <Text as="h6" fontSize={16} fontWeight={400}>
                            Are you sure want to logout?
                        </Text>
                    </ModalBody>
                    <ModalFooter justifyContent="center">
                        <Button
                            variant={"outline"}
                            bgColor={color}
                            color={bg}
                            borderColor={color}
                            borderWidth={"1px"}
                            _hover={{
                                bg: color,
                                color: bg,
                                border: "1px solid color",
                            }}
                            px="10%"
                            mr={3}
                            onClick={onClose}
                            borderRadius="full"
                            fontWeight={500}
                        >
                            Cancle
                        </Button>
                        <Button
                            px="10%"
                            borderRadius="full"
                            bgColor={bg}
                            color={color}
                            borderWidth={"1px"}
                            borderColor={color}
                            fontWeight={500}
                            _hover={{
                                bg: bg,
                                color: color,
                                border: "1px solid color",
                            }}
                            onClick={() => _handleLogout()}
                        >
                            Logout
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
