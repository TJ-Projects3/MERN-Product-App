import { useProductStore } from '@/store/product'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'

const Homepage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products:", products)

  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text 
			      fontSize={{ base: "24px", sm: "38px" }}
		        fontWeight={"bold"}
			      textAlign={"center"}
            bgGradient={"to-r"}
            gradientFrom={"cyan.500"} 
            gradientTo={"red.400"}
            bgClip={"text"}
        >
          Current Products 📍
        </Text>

        <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        gap={5}
        w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length == 0 && <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No Products Found 🍂{" "}
          <Link to={"/create"}>
            <Text as="span" color={"blue.500"} _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>}
      </VStack>
    </Container>
  )
}

export default Homepage