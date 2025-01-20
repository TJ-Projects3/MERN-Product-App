import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import { Container, VStack, Box, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState ({
        name: "",
        price: "",
        image: "",
    });
    const { createProduct } = useProductStore()
    const handleAddProduct = async() => {
       const {success, message} = await createProduct(newProduct)
       console.log("Success:", success)
       console.log("Message:", message)
    }
  return (
    <Container maxW={"container.sm"}>
        <VStack
            spacing={8}
        >
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>

        <Box
            w={"full"} bg={useColorModeValue("white, gray.800")}
            p={6} rounded={"lg"} shadow={"md"}
        >

            <VStack spacing={4}>
                <Input
                placeholder="Product Name"
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <Input
                placeholder="Product Price"
                name='price'
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
                <Input
                type="Image URL" 
                placeholder="Product Image"
                name="image"
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
                <Button colorScheme={'dark'} w={'full'} onClick={handleAddProduct}>
                    Add Product
                </Button>
            </VStack>
        </Box>
        </VStack>

    </Container>
  )
}

export default CreatePage