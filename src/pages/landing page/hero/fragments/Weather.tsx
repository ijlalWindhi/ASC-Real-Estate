import React, { useEffect } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Weather() {
    const scrollRef = React.useRef(null);
    type location = {
        lat: number;
        lon: number;
    };

    const [location, setLocation] = React.useState({
        lat: 0,
        lon: 0,
    });

    const [weather, setWeather] = React.useState({
        temp: "",
        description: "",
        icon: "",
    });

    useEffect(() => {
        setLocation({
            lat: 2,
            lon: 2,
        });
        navigator.geolocation.getCurrentPosition(function (position) {
            setLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        });
    }, []);

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=774c9f3b44d1d7b900105ea1e2ce3098&units=metric`
        )
            .then((res) => res.json())
            .then((result) => {
                setWeather({
                    temp: result.main.temp,
                    description: result.weather[0].description,
                    icon: result.weather[0].icon,
                });
            });
    }, [location]);

    return (
        <Box
            as={motion.div}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: "5" }}
        >
            <Text
                fontSize={{ base: "sm", md: "lg" }}
                fontWeight={"light"}
                mb={2}
            >
                Weather in your location now
            </Text>
            <Flex
                gap={3}
                alignItems={"center"}
                maxW={{ base: "50%", lg: "30%" }}
            >
                <Image
                    src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                    alt="weather icon"
                    w={10}
                    h={10}
                />
                <Box>
                    <Text
                        fontSize={"xl"}
                        fontWeight={"semibold"}
                        color={"gray.800"}
                    >
                        {weather.temp}°C
                    </Text>
                    <Text
                        fontSize={"sm"}
                        fontWeight={"medium"}
                        textTransform={"capitalize"}
                        color={"gray.800"}
                    >
                        {weather.description}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}
