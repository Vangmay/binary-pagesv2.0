import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import ImageBox from '../components/misc/ImageBox'

function NotFound() {
    const router = useRouter()
    setInterval(function(){
        router.push('/')
    },2000)
    return (
        <>
            <ImageBox/>
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
