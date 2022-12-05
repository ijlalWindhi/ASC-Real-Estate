import React from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Box,
    FormControl,
    Input,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
    FormHelperText,
    useColorModeValue,
} from "@chakra-ui/react";
import RegisterHandler from "./RegisterHandler";
import AlertNotification from "../../../components/fragment/alert";

export default function LoginForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const [message, setMessage] = React.useState("");
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();
    const bg = useColorModeValue("gray.800", "white");
    const color = useColorModeValue("white", "gray.800");
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data: any) => {
        setIsLoading(!isLoading);
        const response = await RegisterHandler(data);
        if (response.status === "success") {
            setStatus(response.status);
            setMessage(response.message);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } else {
            setMessage(response.message);
            setStatus(response.status);
        }
        setTimeout(() => {
            setMessage("");
            setStatus("");
            setIsLoading(false);
        }, 3000);
    };

    return (
        <Box width={{ lg: "70%" }} mx={"auto"}>
            <Link to={"/"}>
                <Text>{"<-- Back"}</Text>
            </Link>
            {message !== "" && (
                <AlertNotification message={message} status={status} />
            )}
            <Box mt={4}>
                <Text fontSize={{ base: "2xl", lg: "4xl" }} fontWeight={700}>
                    Register
                </Text>
                <Text fontSize="md" my={3}>
                    Register for start explore
                </Text>
            </Box>
            <Box>
                <FormControl>
                    <Input
                        type="email"
                        id="email"
                        borderRadius="full"
                        focusBorderColor="black"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    {errors.email?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                            Please fill email
                        </FormHelperText>
                    )}
                    <InputGroup mt={4}>
                        <Input
                            type={show ? "text" : "password"}
                            id="password"
                            borderRadius="full"
                            focusBorderColor="black"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                                minLength: 8,
                            })}
                        />
                        <InputRightElement>
                            <IconButton
                                borderRadius="full"
                                size="sm"
                                variant="ghost"
                                mr={[2, 6, 10]}
                                onClick={handleClick}
                                aria-label={"whod hide"}
                                icon={show ? <EyeOff /> : <Eye />}
                            />
                        </InputRightElement>
                    </InputGroup>
                    {errors.password?.type === "required" && (
                        <FormHelperText textColor="red">
                            Please fill password
                        </FormHelperText>
                    )}
                    {errors.password?.type === "minLength" && (
                        <FormHelperText textColor="red">
                            Password minimum 8 character
                        </FormHelperText>
                    )}
                    <Button
                        mt={8}
                        bg={bg}
                        color={color}
                        type="submit"
                        w="full"
                        borderRadius="full"
                        borderWidth={2}
                        borderColor="black"
                        onClick={handleSubmit(onSubmit)}
                        isLoading={isLoading}
                    >
                        Register
                    </Button>
                </FormControl>
            </Box>
            <Text mt={4}>
                Have account? <Link to={"/login"}>Login here</Link>{" "}
            </Text>
        </Box>
    );
}
