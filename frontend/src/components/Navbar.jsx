import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { useColorMode } from './ui/color-mode';
import { IoSunnyOutline,  IoMoonOutline } from "react-icons/io5"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Link to={"/"}>
          <Text
			fontSize={{ base: "24px", sm: "38px" }}
		    fontWeight={"bold"}
			textTransform={"uppercase"}
			textAlign={"center"}
            bgGradient={"to-r"}
            gradientFrom={"blue.400"} 
            gradientTo={"pink.500"}
            bgClip={"text"}
          >
            Product Store 🛒
          </Text>
        </Link>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaCartPlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;