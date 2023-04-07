import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import png from '../../../public/logo2.webp'
import png2 from '../../../public/logo4.webp'
import png3 from '../../../public/logo3.webp'
import { RevealWrapper } from 'next-reveal'

export default function Banner() {
    return (<>
        <Box bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg'>
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                <Container maxW={1400} boxShadow='dark-lg'>
                    <Flex pt={{ lg: '150px', base: '30px' }} pb='100px' px={{ lg: '50px', base: '5px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis={{ lg: '50%', base: '%' }} px={{ lg: '37px', base: '12px' }}>
                            <Heading size={{ lg: '2xl', base: '2xl' }}>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                            <Text pt='10px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                            <Button size='lg' colorScheme='teal' mt='10px'>More Info</Button>
                        </Box>
                        <Box mt={{ lg: '-80px', base: 'auto' }} flexBasis={{ lg: '50%', base: '0%' }}>
                            <Image src={png} alt="Panaverse" width='500' height='200' />
                        </Box>
                    </Flex>
                </Container>
            </RevealWrapper>
        </Box>
        <Box>
            <Container maxW={1400} boxShadow='lg'>
                <Flex gap={{ base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                    <Box flexBasis='50%' m={{ base: 'auto' }} pl='20px'>
                        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                            <Image src={png2} alt="Panaverse" width='450' height='200' />
                        </RevealWrapper>
                    </Box>
                    <Box flexBasis='50%' pt='20px' px={{ lg: '70px', base: '20px' }}>
                        <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                            <Heading pt={{ lg: '20px' }} size={{ lg: '2xl', base: '2xl' }}>Program Of Studies</Heading>
                            <Text pr='30px' pt='20px'> Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
                            <Button mt='20px' mb={{ lg: '50', base: '10px' }} colorScheme='teal' size='lg'>Read More</Button>
                        </RevealWrapper>
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Box>
            <Container maxW={1400} boxShadow='2xl'>
                <Flex gap={{ lg: '0', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                    <Box flexBasis='50%' pt='20px' px={{ lg: '70px', base: '20px' }}>
                        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                            <Heading pt={{ lg: '20px' }} size={{ lg: '2xl', base: '2xl' }}>What Is Panaverse DAO?</Heading>
                            <Text pr='30px' pt='20px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                            <Button mt='20px' mb={{ lg: '50', base: '10px' }} colorScheme='teal' size='lg'>Read More</Button>
                        </RevealWrapper>
                    </Box>
                    <Box flexBasis='50%' m={{ base: 'auto' }} mb={{ lg: '90px', base: '20px' }} >
                        <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                            <Image src={png3} alt="Panaverse" width='400' height='200' />
                        </RevealWrapper>
                    </Box>
                </Flex>
            </Container>
        </Box>
    </>
    )
}
