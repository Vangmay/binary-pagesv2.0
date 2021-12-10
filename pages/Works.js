import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Paragraph } from '../components/text/paragraph'

export default function Works() {
    const bg= useColorModeValue('rgba(246, 173, 85,0.5)','rgba(13, 16, 33)')
    return (
        <>
        <Container>
            <Box 
                borderRadius='lg'
                mb={6}
                p={3}
                textAlign='center'
                bg={bg}
                fontFamily='Inconsolata'
                marginTop='12px'
            >
                Stuff i have done
            </Box> 
        </Container>
        <Box h='100vh'>
            <Box 
                background='linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15449929971988796) 7%, rgba(0,0,0,1) 69%),
                url("")'
                minH={{base:'100%'}}
                        
            >
                <Heading as='h3' fontFamily='Inconsolata' margin='12px'>
                    Sthaapna Website
                </Heading>
                <Paragraph>
                    Sthaapna is a NGO run by humans, I am an intern there and the creator of their website. 
                </Paragraph>
                <Paragraph>
                    It is my first proper internship and I love working with the people
                </Paragraph>
            </Box>
        </Box>
        </>
    )
}
