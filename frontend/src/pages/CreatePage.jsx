import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import { Container, VStack, Box, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        try {
            const { success, message } = await createProduct(newProduct);
            console.log("Success:", success)
            console.log("Message:", message)
            if (success) {
                toast.success(message, {
                    duration: 4000,
                    style: {
                        background: "#4BB543",
                        color: "#fff",
                    },
                    icon: '👏',
                });
            } else {
                toast.error(message, {
                    duration: 4000,
                    style: {
                        background: "#FF4C4C",
                        color: "#fff",
                    },
                    icon: '👎',
                });
            }
        } catch (error) {
            toast.error("An unexpected error occurred", {
                duration: 4000,
                style: {
                    background: "#FF4C4C",
                    color: "#fff",
                },
                icon: '⚠️',
            });
        }
        setNewProduct({ name: "", price: "", image: "" })
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={14} mb={8}>
                    Create New Product
                </Heading>

                <Box
                    w={"950px"}
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded={"lg"}
                    shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder="Product Price"
                            name='price'
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder="Product Image"
                            name="image"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button bg={useColorModeValue("cyan.600", "red.400")} w={'full'} onClick={handleAddProduct}>
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}

export default CreatePage;