import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import styles from '../../styles/globals'
import { Spacer } from '@chakra-ui/react'

function Layout({ children }) {
    return (
        <div className='content'>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
