import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

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
    const router = useRouter()
    setInterval(function(){
        router.push('/')
    },2000)
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
                <animation/>
            </Box>
        </>
    )
}

export default NotFound
