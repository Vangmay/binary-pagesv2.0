import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ImageBox from '../components/misc/ImageBox'

const ImgBox = () => {
    return(
        <Box 
            w="100%" 
            h="50vh" 
            background='url("/Images/About-gif.gif")'
            bgSize='cover'
            bgPosition='left'
            bgRepeat='no-repeat'
            alignItems='center'
            textAlign='right'
            justifyContent='right'
            display='flex'
        />
    )
}

function NotFound() {
    return (
        <>
            <ImgBox/>
            <Box
                h='100vh'
                minH='100%'
                >
                <Heading  textAlign='center' fontSize={{base:'125px',lg:'250px',md:'250px'}}>
                404
                </Heading>
                <Heading  textAlign='center'>
                    The knight guides you back to 505
                </Heading>

            </Box>
        </>
    )
}

export default NotFound
