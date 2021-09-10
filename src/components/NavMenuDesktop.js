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
                <Menu>
                    <MenuButton as={Button}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Item 1</MenuItem>
                        <MenuItem>Item 2</MenuItem>
                        <MenuItem>Item 3</MenuItem>
                        <MenuItem>Item 4</MenuItem>
                    </MenuList>
                </Menu>
                <Link to="/">1</Link>
                <Link to="/">2</Link>
                <Link to="/">3</Link>
                <Link to="/">4</Link>
            </HStack>
        </Flex>
    )
}

export default NavMenuDesktop
