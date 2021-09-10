import React, { useContext } from 'react'
import { Box, Badge, Icon, Image, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import NavMenuDesktop from '../components/NavMenuDesktop'
import { MdMenu, MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = (logo) => {

    const { openCart, openMenu, checkout } = useContext(ShopContext);

    return (
        <Box>
            <Box>
                <Icon
                    as={MdMenu}
                    width={30}
                    height={30}
                    cursor="pointer"
                    onClick={() => openMenu()}
                />
                <Image src="https://cdn.shopify.com/s/files/1/0498/0601/6664/files/FoodLogo.svg?v=1631293033"/>
                <NavMenuDesktop />
            </Box>
        </Box>
    )
}

export default Header
