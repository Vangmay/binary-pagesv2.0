import React from 'react'
import Navbar from '../Navbar'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/react'


function Layout({ children }) {
    return (
        <div className='content'>
            <Navbar/>
            {children}

        </div>


                
                
            
    )
}

export default Layout
