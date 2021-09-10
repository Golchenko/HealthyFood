import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Button,
    Flex,
    HStack,
    Link
} from "@chakra-ui/react"

const NavMenuDesktop = () => {
    return (
        <Flex flexDir="row" alignItems="center">
            <HStack>
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>
                <Menu>
                    <MenuButton as={Button}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Meat</MenuItem>
                        <MenuItem>Salad</MenuItem>
                        <MenuItem>Burgers</MenuItem>
                        <MenuItem>Drinks</MenuItem>
                    </MenuList>
                </Menu>
                <Link to="/">Features</Link>
                <Link to="/">Contact Us</Link>
            </HStack>
        </Flex>
    )
}

export default NavMenuDesktop
