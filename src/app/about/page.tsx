'use client'
import { Box, Button, Container, Flex, Heading, Image, Text, } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'
import Home from '../components/Home'
import Instructor from '../components/Instructor'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function page() {
  return (
    <>
      <Home title='About' src='https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80' />
      <Box>
        <Container maxW={1400}>
          <Flex my='50px' px={{ lg: '60px', base: '20px' }} gap='30px' display={{ lg: 'flex', base: 'grid' }}>
            <Box flexBasis='50%' >
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
              <Image m='auto' src='/president.webp' alt='President' />
              </RevealWrapper>
            </Box>
            <Box flexBasis='50%'>
        <RevealList interval={60} delay={300} origin='right' duration={1000} distance='500px' reset={false}>
              <Heading size='2xl'  >Dr. Arif Alvi</Heading>
              <Text mt='10px'>
                Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
              </Text>
              <Text mt='10px'>
                Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
              </Text>
              <Text mt='10px'>
                President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
              </Text>
              <Button mt='10px' colorScheme='teal' size='md'>More Info</Button>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          <Flex my='50px' px={{ lg: '60px', base: '20px' }} gap='30px' display={{ lg: 'flex', base: 'grid' }}>
            <Box flexBasis='50%'>
            <RevealList interval={60} delay={300} origin='left' duration={1000} distance='500px' reset={false}>
              <Heading size='2xl'>Panaverse DAO</Heading>
              <Text mt='10px'>
                Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet
              </Text>
              <Text mt='10px'>
                President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
              </Text>
              </RevealList>
            </Box>
            <Box flexBasis='50%' m='auto'>
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
              <Image m='auto' src='/logo5.webp' alt='panaverse' width={{lg:450,base:300}} height={{lg:280,base:200}}/>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          <Flex my='50px' px={{ lg: '60px', base: '20px' }} gap='30px' display={{ lg: 'flex', base: 'grid' }}>
            <Box flexBasis='50%' >
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
              <Image m='auto' src='/Zia.webp' alt='Zia khan' />
              </RevealWrapper>
            </Box>
            <Box flexBasis='50%'>
            <RevealList interval={60} delay={300} origin='right' duration={1000} distance='500px' reset={false}>
              <Heading size='2xl'>Zia Khan</Heading>
              <Text mt='10px'>
              CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.
              </Text>
              <Text mt='10px'>
              Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.
              </Text>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Instructor />
       
    </>
  )
}