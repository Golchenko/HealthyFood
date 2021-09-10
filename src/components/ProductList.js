import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const ProductList = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return
    <div>
        Loading...
    </div>

    return (
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
            {
                products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.id}>
                        <Box _hover={{ opacity: '80%' }} textAlign="center">
                            <Image
                                src={product.images[0].src}
                            />
                            <Text>{product.title}</Text>
                            <Text>${product.variants[0].price}</Text>
                        </Box>
                    </Link>
                ))
            }
        </Grid>
    )
}

export default ProductList
