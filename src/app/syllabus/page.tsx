'use client'
import { Box, Center, Container, Flex, Heading, Text, } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { cards,core } from '../components/database'

import Home from '../components/Home'
import { RevealList, RevealWrapper } from 'next-reveal'


export default function page() {
  return (<>
    <Home title='Syllabus' src='https://cache.careers360.mobi/media/presets/860X430/article_images/2021/1/4/BITS-HD-Syllabus-2021.webp' />

    <Box pt='40px'>
      <Container maxW={1400} pb='40px'>
        <Center flexDir='column'>
          <Heading size='2xl' >Course Syllabus</Heading>
          <Text textAlign='center' px='150px' pt='20px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
        </Center>
        <Center flexDir='column'>
          <Heading mt='30px' >Common In All</Heading>
          <Text textAlign='center' px='150px' pt='20px'>Every participant of the program will start by completing the following three core courses:</Text>
        </Center>
        <Center>
          <Flex gap='34px' mb='30px' pt='60px' justifyContent='center' >
            {core.map((elem) => (
            <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='320px' key={elem.id}>
              <Heading textDecoration='underline' pb='20px'>{elem.heading}</Heading>
              <Text>{elem.text}</Text>
            </Box>
            ))}
          </Flex>
        </Center>

        <Center flexDir='column'>
          <Heading mt='30px' >Specialized Tracks</Heading>
          <Text textAlign='center' px='150px' pt='20px'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
        </Center>
      </Container>


      <Container maxW={1400} pt='50px' bgImage='https://www.apingenieria.com/wp-content/plugins/page-layout-builder/images/bg/geometricBGs43.jpg' bgSize='cover' bgAttachment='fixed'>
        {cards.map((elem) => (
          <Box key={elem.id}>
            <Center flexDir='column'>
              <Heading color='black'  >{elem.heading1}</Heading>
              <Text fontWeight='medium' color='black' textAlign='center' px='150px' pt='20px'>{elem.text1}</Text>
            </Center>
            <Center>
              <Flex gap='34px' mb='30px' pt='60px' justifyContent='center' >
                <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='360px' >
                  <Heading color='black' textDecoration='underline' pb='20px'>{elem.heading2}</Heading>
                  <Text fontWeight='medium' color='black' px='12px'>{elem.text2}</Text>
                </Box>
                <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='360px' >
                  <Heading color='black' textDecoration='underline' pb='20px'>{elem.heading3}</Heading>
                  <Text fontWeight='medium' color='black' px='12px'>{elem.text3}</Text>
                </Box>
              </Flex>
            </Center>
          </Box>
        ))}
      </Container>
    </Box>

  </>
  )
}
