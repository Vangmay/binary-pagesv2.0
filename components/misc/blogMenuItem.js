import { 
    Link,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
} from '@chakra-ui/react'
import { useRef } from 'react'
import React from 'react'
import { Heading,Box,useColorModeValue } from '@chakra-ui/react'
import { Paragraph } from '../text/paragraph'
export const BlogMenuItem = (props) => {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Link href={props.href} 
            textDecor='none'
            _hover={
                {textDecoration:'none'}
            }
            gridArea={props.gridArea}
            bg={useColorModeValue('#cfc9c2','#24283b')}
            padding={{base:'10px',md:'10px',sm:'8px'}}
            marginTop='12px'
            borderRadius={20}
            transition='0.2s all ease'
            
            onClick={onOpen}
            ref={btnRef}
        >
        <Box 
        >

                <Heading 
                as='h3'  
                fontFamily= 'Inconsolata' 
                fontSize={{base:'45px',md:'45px',sm:'35px'}}
                textAlign='left'
                >
                    {props.Title}
                </Heading>
                <Drawer
                    isOpen={isOpen}
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >   
                    <DrawerContent 
                     bg='red'
                    >
                        <Button
                            onClick={onClose}                        
                        >
                            oi
                        </Button>
                    </DrawerContent>    
                </Drawer>
        </Box>
        </Link>

    )
}
                
               
                
