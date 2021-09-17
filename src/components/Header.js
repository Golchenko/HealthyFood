import React, { useContext } from 'react'
import { Box, Badge, Icon, Image, Flex, Button } from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import NavMenuDesktop from '../components/NavMenuDesktop'
import { MdMenu, MdShoppingCart } from 'react-icons/md'

const Header = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext);

    return (
        <Flex className="site-header" flexDir="row" alignItems="center" justifyContent="space-between">
            <Box className="burger-button">
                <Icon
                    as={MdMenu}
                    width={30}
                    height={30}
                    cursor="pointer"
                    onClick={() => openMenu()}
                />
            </Box>
            <Image
                className="main-logo"
                src="https://cdn.shopify.com/s/files/1/0498/0601/6664/files/FoodLogo.svg?v=1631293033"
            />
            <NavMenuDesktop
                linkType="active-menu"
            />
            <Box>
                <Button
                    width={155}
                    height={46}
                    background="#DC780B"
                    onClick={() => openCart()}
                >
                    Booking Now
                    <Badge className="cart-badge" backgroundColor="#fff" borderRadius="50%">{checkout.lineItems?.length}</Badge>
                </Button>
            </Box>
        </Flex>
    )
}

export default Header
