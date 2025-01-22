import { Box, Heading, Text, Image, IconButton, HStack, Button } from '@chakra-ui/react'
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import React from 'react'
import { useColorModeValue } from './ui/color-mode'

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.600")

  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    bg={bg}>
    <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

    <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
            {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
            ${product.price}
        </Text>

        <HStack spacing={2}>
            <Button>
                <TiDelete />
            </Button>
            <Button>
                <CiEdit />
            </Button>
        </HStack>
    </Box>
    </Box>
  )
}

export default ProductCard