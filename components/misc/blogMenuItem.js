import { HStack,Heading,Box,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
export const BlogMenuItem = (props) => {
    const textColor = useColorModeValue('white','cyan.300')
    const descColor = useColorModeValue('#eee9e6','#919191')
    return (
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
                w={{base:'conainer.sm',lg:'container.xl',md:'container.md',sm:'container.sm'}}
                minW={{base:'conainer.sm',lg:'container.xl',md:'container.md',sm:'container.sm'}}
            >
                <Box 
                    h='100%'
                    w='100%'
                    justifyContent='right'
                    position='relative'
                    top='0px'
                    bottom='0px'
                    transition = {{base:'none',lg:'0.14s all ease-out',md:'0.14s all ease-out'}}

                    _hover={
                        {backdropFilter:'blur(2.5px) contrast(90%) brightness(50%) saturate(150%) '}
                    }
                >


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
                </Box>    
            </Box>

)
}



