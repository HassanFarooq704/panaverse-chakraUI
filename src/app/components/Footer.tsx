'use client'

import { Box, Container, Grid, Heading, SimpleGrid, Text,Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { PhoneIcon } from '@chakra-ui/icons'
import {SearchIcon}  from '@chakra-ui/icons'
import {ChatIcon} from '@chakra-ui/icons'

export default function Footer() {
  return (
        <Box bg='black'>
            <Container maxW={1400}>
                <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='40px' px={{lg:'20px',base:'0'}} templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2,1fr)',lg:'repeat(4, 1fr)'}}>
                    <Box >
                        <Heading pb='15px' color='white'>About Us</Heading>
                        <Image m={{lg:'0',base:'auto'}} src={'/Logo.png'} alt='Panaverse_logo'></Image>
                        <Text pt='15px' pr={{lg:'50px',base:'0'}} color='white'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                    </Box>
                    <Box >
                        <Heading color='white'>Important Links</Heading>
                        <Grid pt='50px' color='whitesmoke'>
                        <Link href='/'>Home</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Syllabus</Link>
                        <Link href='/'>Explore</Link>
                        <Link href='/'>Contact</Link>
                        </Grid>
                    </Box>
                    <Box px='30px'>
                        <Heading color='white' >Follow Us</Heading>
                        <Grid pt='40px' color='whitesmoke' >
                            <Link href=''>Facebook</Link>
                            <Link href=''>Twitter</Link>
                            <Link href=''>Linkedin</Link>
                            <Link href=''>Github</Link>
                            <Link href=''>Youtube</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='white'>Contact Us</Heading>
                        <Grid color='whitesmoke' pt='50px'>
                            <Link href='/'><PhoneIcon/>  +92 123 4567890</Link>
                            <Link href='/'><ChatIcon/> abcdefghi@gmail.com</Link>
                            <Link href='/'><SearchIcon/>  Lahore, Pakistan</Link>  
                        </Grid>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
  )
}
