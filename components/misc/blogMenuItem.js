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
    const textColor = useColorModeValue('white','cyan.300')
    const descColor = useColorModeValue('#eee9e6','#919191')
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
                marginBottom='25px'
                // marginLeft={{base:'12px',lg:'15px',md:'10px',sm:'8px'}}
                w={{base:'conainer.sm',lg:'container.xl',md:'container.md',sm:'container.sm'}}
                minW={{base:'conainer.sm',lg:'container.xl',md:'container.md',sm:'container.sm'}}
                // w={{base:'400px',lg:'1200px',md:'1000px',sm:'400px'}}
            >
                {/* <Box 
                    h='100%'
                    w='100%'
                    justifyContent='right'
                    display='grid'
                > */}

                <HStack 
                    h='100%'
                    flexDir={{base:"row",md:"row",sm:'row'}}
                    display='flex'
                    justifyContent='right'
                    w='100%'
                >
                    <Box 
                        position='relative'
                        justifyContent='right'
                        h='100%'
                        placeItems='center'
                        maxW={{base:'100%',lg:'50%',md:'50%',lg:'50%',sm:'100%'}}
                        alignContent='center'
                        textAlign='center'
                        transition='1.2s easeIn'
                        // bg="rgba(33,33,33,0.5)"
                        // bg={useColorModeValue("rgba(222, 222, 222,0.5)","rgba(33,33,33,0.5)")}
                        bg=' linear-gradient(90deg, rgba(33,33,33,0.5522584033613445) 0%, rgba(25,24,34,0.6446953781512605) 0%, rgba(18,17,24,0.4150035014005602) 57%, rgba(0,0,0,1) 100%);'
                        padding={{base:'10px',md:'10px',sm:'8px'}}
                        backdropFilter='blur(1.2px) contrast(1200px)'
                    >
                        <Heading 
                            as='h3'  
                            fontFamily= 'Inconsolata' 
                            fontSize={{base:'25px',lg:'40px',md:'30px'}}
                            textAlign='right'
                            w='100%'    
                            color={textColor}
                        >
                            {props.Title}
                        </Heading>

                        <Heading
                            as='h5'
                            textAlign='right'
                            h='100%'
                            fontSize={{base:'10px',lg:'18px',md:'15px',sm:'10px'}}
                            
                            fontFamily='Inconsolata'
                            // color='#ededed'
                            variant={useColorModeValue('primaryLight','primaryDark')}
                            color = {descColor}
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

               
                
