import { Box, Center, Container, Heading, Image, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { data } from '../components/database'
import { RevealList, RevealWrapper } from 'next-reveal'


export default function Instructor() {
    return (
        <Box pb={{ lg: '80px', base: '50px' }} pt={{ lg: '80px', base: '30px' }} >
            <Container maxW={1400} >
                <Center >
                    <Heading size={{ lg: 'xl', base: '2xl' }}> Our Instructors </Heading>
                </Center>
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                    <Flex flexDir='row' pt={{ lg: '20px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }} gap={{ lg: '0', base: '20px' }}>
                     
                        {data.map((ins) => (
                            <Box key={ins.id}>
                                <Center>
                                    <Image borderRadius='full' width='80px' height='80px' src={ins.src} alt='panaverse' />
                                </Center>
                                <Heading textAlign='center' size='md'>{ins.heading}</Heading>
                                <Text size='sm' px={{ lg: '40px', base: '20px' }} textAlign='center'>{ins.text} </Text>
                            </Box>
                        ))}
                    </Flex>
                </RevealWrapper>
            </Container>
        </Box>
    )
}
