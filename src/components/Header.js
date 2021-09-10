import React, { useContext } from 'react'
import { Box, Badge, Icon, Image, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import NavMenuDesktop from '../components/NavMenuDesktop'
import { MdMenu, MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = (logo) => {

    const { openCart, openMenu, checkout } = useContext(ShopContext);

    return (
        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
            <Flex flexDir="row" alignItems="center">
                <Icon
                    as={MdMenu}
                    width={30}
                    height={30}
                    cursor="pointer"
                    onClick={() => openMenu()}
                />
                <Image
                    width={44}
                    height={44}
                    src="https://cdn.shopify.com/s/files/1/0498/0601/6664/files/FoodLogo.svg?v=1631293033" />
                <NavMenuDesktop />
            </Flex>
            <Box>
                <Icon
                    as={MdShoppingCart}
                    width={30}
                    height={30}
                    cursor="pointer"
                    onClick={() => openCart()}
                />
                <Badge backgroundColor="#ff38bd" borderRadius="50%">{checkout.lineItems?.length}</Badge>
            </Box>
        </Flex>
    )
}

export default Header
