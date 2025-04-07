import { Button, Container, Flex, HStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { useColorMode, useColorModeValue } from './ui/color-mode';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const buttonBg = useColorModeValue("gray.200", "gray.700");
    const textColor = useColorModeValue("black", "white")
    const buttonHoverBg = useColorModeValue("blue.600", "cyan.700"); // Hover colors

    return (
        <Container maxW="1140px" px={4}>
            <Flex
                h={16}
                alignItems="center"
                justifyContent={"space-between"}
                flexDir={{ base: "column", sm: "row" }}
            >
                <Box>
                    <Link to={"/"}>
                        <Text
                            fontSize={{ base: "24px", sm: "38px" }}
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                            textAlign={"center"}
                            bgGradient={"to-r"}
                            gradientFrom={"cyan.500"}
                            gradientTo={"red.400"}
                            bgClip={"text"}
                            marginTop={2}
                        >
                            Cozy Corners 🛋️
                        </Text>
                    </Link>
                    <Text
                        fontSize={{ base: "8px", sm: "20px" }}
                        fontWeight={"bold"}
                        bgGradient={"to-r"}
                        gradientFrom={"cyan.500"}
                        gradientTo={"red.400"}
                        bgClip={"text"}
                    >
                        Your one-stop app for room & furniture products and inspo
                    </Text>
                </Box>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button
                            bg={buttonBg}
                            color={textColor}
                        >
                            <FaCartPlus fontSize={20} />
                        </Button>
                    </Link>
                    <Button
                        bg={buttonBg}
                        color={textColor}
                        onClick={toggleColorMode}
                    >
                        {colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;