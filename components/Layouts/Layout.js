import React from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import Navbar from '../Navbar'
import { Box } from '@chakra-ui/layout'
import { Footer } from '../Footer'
import Head from 'next/head'
import {Helmet} from 'react-helmet'
import { Cursor} from '../cursor'

function Layout({ children }) {
    const bg=useColorModeValue('rgba(242 232 222)','gray.900')
    return (
        <>
        <Cursor/>
        <Box as='main' transition='0.2s' >
            <Head>
                <title>The_Binary_pagesV2.0</title>
                <meta name="description" content="Welcome to the The binarypages" />
                
            </Head>
            <Helmet bodyAttributes={{style:`background-color:${bg};` }}/>
            <Navbar/>
            <Box>
                {children}
            </Box>
            <Footer/>
        </Box>
        </>
                
        

                
                
            
    )
}

export default Layout
