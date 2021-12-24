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
    Button,
    HStack
} from '@chakra-ui/react'
import { useRef,useState } from 'react'
import React from 'react'
import { Heading,Box,useColorModeValue } from '@chakra-ui/react'
import { Paragraph } from '../text/paragraph'
export const BlogMenuItem = (props) => {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [display,setDisplay] = useState("100%")
    
    return (
        <Link href={props.href} 
            textDecor='none'
            _hover={
                {textDecoration:'none'}
            }
            gridArea={props.gridArea}
            marginTop='12px'
            borderRadius={20}
            transition='0.2s all ease'
            onClick={onOpen}
            >
            <Box 
                minH='250px'
                padding={{base:'10px',md:'10px',sm:'8px'}}
                bg='linear-gradient(90deg, rgba(33,33,33,0.5522584033613445) 0%, rgba(25,24,34,1) 28%, rgba(0,0,0,1) 100%);'
                h='250px'
            >

                <HStack h='100%'
                    flexDir={{base:"column",md:"row",sm:'column'}}
                    
                >

                    <Heading 
                    as='h3'  
                    fontFamily= 'Inconsolata' 
                    fontSize={{base:'45px',md:'45px',sm:'35px'}}
                    textAlign='left'
                    w='100%'
                    
                    >
                        {props.Title}
                    </Heading>
                    <Box 
                        position='relative'
                        w='100%' 
                        justifyContent='right'
                        h='100%'
                        placeItems='center'
                        display='flex'
                        transition='1.2s easeIn'
                    >

                        <Heading
                            as='h5'
                            textAlign='right'
                            fontSize={{base:'20px',md:'18px',sm:'15px'}}
                            fontFamily='Inconsolata'
                            padding={{base:'9.5px',md:'10px',sm:'8px'}}
                            color='#ededed'
                        >
                         {props.Desc}
                        </Heading>
                    </Box>
                </HStack>
                    
            </Box>
        </Link>

    )
}
                
               
                
