import { 
    background, 
    Box, 
    VStack,
    Heading, 
    Button
} from '@chakra-ui/react'
import React from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'


export const Magazine = () => {
    return (
        <AnimateSharedLayout>
            <Box w='100%' >

                <motion.div layout initial={{borderRadius:50}} className='List-container'>
                    <Item 
                        title='The Bridge #7'
                        paragraph='hello'
                    >
                        
                    </Item>
                    
                    <Item title='Cambridge Chronicles'/>
                </motion.div>
            </Box>
        </AnimateSharedLayout>

    )
}

function Item(props,{children}){
    const [isOpen,setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return(
        <motion.li layout onClick={toggleOpen} initial={{borderRadius:10}} className='list'>
            <motion.h1 layout className='Title'>{props.title}</motion.h1>

            <AnimatePresence>{isOpen && <Content paragraph = {props.paragraph}/>}</AnimatePresence>
            {children}
        </motion.li>
    )
}


function Content(props){
    return (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className='Paragraph'>{props.paragraph}</p>
        </motion.div>
    );    
}