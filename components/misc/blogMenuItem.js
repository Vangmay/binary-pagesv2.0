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
    var gradient = ''
    return (
        // <Link href={props.href} 
        //     textDecor='none'
        //     _hover={
        //         {textDecoration:'none'}
        //     }
        //     gridArea={props.gridArea}
        //     marginTop='12px'
        //     borderRadius={20}
        //     transition='0.2s all ease'
        //     onClick={onOpen}
        //     >
            <Box 
                minH='250px'
                h='400px'
                bg='rgba(33,33,33,0.4)'
                backgroundImage={`url(${props.Image})`}
                outline='2.5px dashed #3e3e3e'
                outlineOffset='5px'
                transition='0.2s ease-Out'
                _hover={
                    {outlineOffset:'10px'}
                }
                borderRadius={15}
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
                backgroundPosition='center'
                marginTop='50px'
                w='1200px'
            >
                {/* <Box 
                    h='100%'
                    w='100%'
                    justifyContent='right'
                    display='grid'
                > */}

                <HStack 
                    h='100%'
                    flexDir={{base:"column",md:"row",sm:'column'}}
                    display='flex'
                    justifyContent='right'
                >

                    <Box 
                        position='relative'
                        justifyContent='right'
                        h='100%'
                        placeItems='center'
                        
                        maxW='50%'
                        alignContent='center'
                        textAlign='center'
                        transition='1.2s easeIn'
                        // bg="rgba(33,33,33,0.5)"
                        // bg={useColorModeValue("rgba(222, 222, 222,0.5)","rgba(33,33,33,0.5)")}

                        bg='linear-gradient(90deg, rgba(33,33,33,0.5522584033613445) 0%, rgba(25,24,34,1) 28%, rgba(0,0,0,1) 100%);'
                        padding={{base:'10px',md:'10px',sm:'8px'}}
                        backdropFilter='blur(1.2px) contrast(1200px)'
                    >
                        <Heading 
                            as='h3'  
                            fontFamily= 'Inconsolata' 
                            fontSize={{base:'45px',md:'45px',sm:'35px'}}
                            textAlign='right'
                            >
                            {props.Title}
                        </Heading>

                        <Heading
                            as='h5'
                            textAlign='right'
                            fontSize={{base:'20px',md:'18px',sm:'15px'}}
                            fontFamily='Inconsolata'
                            padding={{base:'9.5px',md:'10px',sm:'8px'}}
                            // color='#ededed'
                            variant={useColorModeValue('primaryLight','primaryDark')}
                            
                        >
                            {props.Desc}
                        </Heading>
                    </Box>
                </HStack>
                {/* </Box> */}
                    
            </Box>
        // </Link>

)
}

               
                
