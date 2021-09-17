import React from 'react'
import {
    Flex,
    HStack,
    VStack,
    Box
} from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const NavMenuDesktop = ({ linkType }) => {
    return (
        <Flex className="desktop-menu" flexDir="row" alignItems="center">
            <HStack spacing="2.5rem">
                <Link to="/" className={linkType}  >Home</Link>
                <Link to="/">About Us</Link>
                <Box className="desktop-menu has-submenu">
                        <Link className="desktop-menu__link" to="/catalog" >Menu</Link>
                    <VStack className="desktop-submenu__list" alignItems="flex-start">
                        <Link to="/">Meat</Link>
                        <Link to="/">Salad</Link>
                        <Link to="/">Burgers</Link>
                        <Link to="/">Drinks</Link>
                    </VStack>
                </Box>
                <Link to="/">Features</Link>
                <Link to="/">Contact Us</Link>
            </HStack>
        </Flex>
    )
}

export default NavMenuDesktop
