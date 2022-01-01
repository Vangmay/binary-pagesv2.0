import { 
    background, 
    Box, 
    VStack,
    Heading, 
    Button,
    Link,
    useColorModeValue,
    Container,
    useColorMode
} from '@chakra-ui/react'
import React from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { Paragraph } from '../text/paragraph'


export const Magazine = () => {
    const container_bg = useColorModeValue('red','blue')
    return (
        <AnimateSharedLayout>
            <Box w={{base:'100%',sm:'100%',md:'50%'}} 
                padding={{base:'12px',md:'15px',sm:'10px'}} 
                paddingLeft={0}
            >
                <motion.div layout className='List-container'>
                        <Item 
                            title='The Bridge #7'
                            paragraph='The is the first edition of the bridge that was designed by me, It was a tough task for me at first.
                            Honestly,I did not even know weather I would be able to do it or not, But I was able to and everything went great.'
                            href='https:www.youtube.com'
                        />
                        <Item 
                            title='Cambridge Chronicles' 
                            paragraph='FIRST NEWSLETTER OF OUR SCHOOL' 
                            href='https:www.youtube.com'
                        />

                </motion.div>
            </Box>
        </AnimateSharedLayout>

    )
}


function Item(props,{children}){
    const [isOpen,setIsOpen] = useState(false);
    const bg= useColorModeValue("rgba(242,232,222,0.8)",'#2A4365')
    const toggleOpen = () => setIsOpen(!isOpen);
    const Heading_variant = useColorModeValue('light','dark')
    return(
        <motion.li layout onClick={toggleOpen} style={{backgroundColor:bg}} className='list'>
            <Box w='full' h='full'>

                <motion.h1 layout className='Title' >
                    <Heading variant={Heading_variant}>
                        {props.title} 
                        <ArrowDownIcon/>

                    </Heading>
                </motion.h1>

                <AnimatePresence>{isOpen && <Content paragraph = {props.paragraph} href = {props.href}/>}</AnimatePresence>
            </Box>
        </motion.li>
    )
}
                


function Content(props){
    
    const button_variant = useColorModeValue('socialLight','social')
    return (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Paragraph className=''>{props.paragraph}</Paragraph>
          <Link href={props.href} isExternal>
            <Button variant={button_variant}>Have a look</Button>
          </Link>
        </motion.div>
    );    
}