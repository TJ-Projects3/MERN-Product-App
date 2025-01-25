import { Box, Heading, Text, Image, IconButton, HStack, Button } from '@chakra-ui/react'
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import React from 'react'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '@/store/product';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.700")
    const {deleteProduct} = useProductStore()
    const handleDelete = async (pid) => {
        const { success, message } = await deleteProduct(pid)
        if (!success) {
            toast.error(message, {
            duration: 4000,
            icon: "👎",
            style: {
                background: "#F56565",
                color: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }
            })
        } else {
            toast.success(message, {
            duration: 4000,
            icon: "👍",
            style: {
                background: "#4BB543",
                color: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }
            })
        }
    }

return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}>
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' objectPosition='center' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>
                <IconButton bg={"#F56565"} onClick={() => handleDelete(product._id)}>
                    <TiDelete />
                </IconButton>
                <IconButton bg={"blue.500"}>
                    <CiEdit />
                </IconButton>
            </HStack>
        </Box>
    </Box>
)
}

export default ProductCard