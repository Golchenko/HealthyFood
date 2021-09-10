import React, {useContext, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import  ProductList from '../components/ProductList'
import { Box, Grid, Text, Image } from '@chakra-ui/react'


const Catalog = () => {
    return (
        <Box>
            <ProductList />
        </Box>
    )
}

export default Catalog
