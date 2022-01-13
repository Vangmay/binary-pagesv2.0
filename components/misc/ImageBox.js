import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box,Text } from '@chakra-ui/layout'
import { AspectRatio } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/Home.module.css'

const ImageBox = () => {
    const text_variant = useColorModeValue('primary_light','primary')
    return (
        <Box 
            w="100vw" 
            h="50vh" 
            background='linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15449929971988796) 7%, rgba(0,0,0,1) 69%),
            url("/Images/")'
            bgSize='cover'
            bgPosition='left'
            bgRepeat='no-repeat'
            alignItems='center'
            textAlign='right'
            justifyContent='right'
            display='flex'
        > 
            <Box
                position='absolute'
                zIndex='1000'
                top={0}
                left={0}
                bg='red'
                width='100vw'
                height='50vh'
                background='linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15449929971988796) 7%, rgba(0,0,0,1) 69%)'
            >
            </Box>

            <video className={styles.video} src='/Images/about-vid.mp4' muted autoPlay loop>
            </video>
        </Box>
    )
}
export default ImageBox