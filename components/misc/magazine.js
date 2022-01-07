import {  
    Box, 
    Heading, 
    Button,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import React,{useState} from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { Paragraph } from '../text/paragraph'


export const Magazine = () => {
    return (
        <AnimateSharedLayout>
            <Box w={{base:'100%',sm:'100%',md:'50%'}} 
                padding={{base:'12px',md:'15px',sm:'10px'}} 
                paddingLeft={0}
            >
                <motion.div layout className='List-container'>
                        <Item 
                            title='The Bridge #7'
                            paragraph='Second edition of the bridge that was designed by me. Theme: Gen-z'
                            href='https://flipbooks.fleepit.com/f-24031-thebridge_7thedition'
                        />
                        <Item 
                            title='Cambridge Chronicles' 
                            paragraph='First newsletter of our school designed by me and edited by Rimjhim, Mahi,Ojas,Yahya ' 
                            href='https://flipbooks.fleepit.com/f-24486-cambridge_chronicles'
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