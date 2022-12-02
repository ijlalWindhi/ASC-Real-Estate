import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Hero from "./hero";
import About from "./about";
import Property from "./property";
import Article from "./article";
import Contact from "./contacts";
import Footer from "../../components/footer";

export default function index() {
    return (
        <Box w={"full"} minH={"100vh"}>
            <Navbar />
            <Hero />
            <About />
            <Property />
            <Article />
            <Contact />
            <Footer />
        </Box>
    );
}
