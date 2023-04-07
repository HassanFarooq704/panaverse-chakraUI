'use client'
import React from 'react'
import { Box, Container, SimpleGrid, Flex, Button,Menu,MenuButton,MenuItem,MenuList,IconButton } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import logo from '../../../public/Logo.png'
import Link from 'next/link'
import Instructor from './Instructor'

export default function Header() {
    return (<>
        <Box boxShadow='2xl'>
            <Container maxW={1400}>
                <SimpleGrid templateColumns={{lg:'repeat(3, 1fr)',base:'repeat(2, 1fr)'}}>
                    <Box>
                        <Image src={logo} alt='Panaverse_logo'></Image>
                    </Box>
                    <Flex display={{ lg: "flex", base: "none" }} placeItems='center' color='black' fontSize={18} fontWeight='semibold' gap={10}>
                        <Link href='/'>Home</Link>
                        <Link href='/syllabus'>Syllabus</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/explore'>Explore</Link>
                        <Link href='/contact'>Contact</Link>
                    </Flex>
                    <Box display={{ lg: "initial", base: "none" }}>
                        <Button mt='20px' size='lg' colorScheme='teal' float='right'>Apply</Button>
                    </Box>
                    <Box display={{lg:'none',base:'initial'}} mt={{lg:'0',base:'20px'}}>
                        <Menu>
                            <MenuButton float='right'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>
                                   <Link href='/'> Home </Link>
                                </MenuItem>
                                <MenuItem>
                                   <Link href='/syllabus'> Syllabus </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/about'>About</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/explore'>Explore</Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/contact'>Contact</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </SimpleGrid> 
            </Container>
        </Box>

    </>
    )
}

