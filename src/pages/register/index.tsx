import React, { useEffect } from "react";
import { Center, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import LoginForm from "./fragments/RegisterForm";
import ImageLogin from "../../assets/image-login.svg";

export default function index() {
    useEffect(() => {
        document.title = "Real Estate | Register";
    }, []);

    return (
        <Container maxW="80%" gridTemplateRows="repeat(2, 1fr)" py={14} p={0}>
            <Center>
                <Grid
                    gap={{ base: "5", lg: "90" }}
                    h="100vh"
                    w="base: 100%"
                    templateColumns={{ lg: "repeat(2, 1fr)" }}
                    justifyContent="center"
                >
                    <GridItem margin={{ base: "auto", lg: "auto 0" }}>
                        <LoginForm />
                    </GridItem>
                    <GridItem margin={{ base: "5", lg: "auto 0" }}>
                        <Center>
                            <Image
                                src={ImageLogin}
                                width={{
                                    base: "100%",
                                    sm: "45",
                                    md: "40vw",
                                    lg: "33vw",
                                }}
                                draggable={false}
                            />
                        </Center>
                    </GridItem>
                </Grid>
            </Center>
        </Container>
    );
}
