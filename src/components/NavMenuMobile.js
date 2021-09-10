import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShopContext } from '../context/ShopContext'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack
} from '@chakra-ui/react'

const NavMenu = () => {

    const { isMenuOpen, closeMenu } = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack>
                        <Link to="/">Meat</Link>
                        <Link to="/">Salad</Link>
                        <Link to="/">Burgers</Link>
                        <Link to="/">Drinks</Link>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default NavMenu
