import React from 'react'
import Navbar from '../Navbar'
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
