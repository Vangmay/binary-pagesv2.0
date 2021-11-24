import React from 'react'
import Navbar from '../Navbar'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { gifbox } from '../misc/gifbox'
import { Spacer } from '@chakra-ui/react'


function Layout({ children }) {
    return (
        <div className='content'>
            <Navbar/>
            <Box 
                bg='linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.11248249299719892) 27%, rgba(0,0,0,0.15449929971988796) 33%, rgba(0,0,0,1) 68%)'
            >
                <Image src='./carcar.gif' alt='iamge'/>
                
            </Box>
            {children}
            
        </div>
    )
}

export default Layout
