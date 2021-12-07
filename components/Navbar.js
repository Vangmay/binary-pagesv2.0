import { 
    useColorModeValue,
    Text,
    useColorMode,
    Switch,
    Box,
    Flex,
    Button,
    Spacer,
    Container,
    IconButton,
    Fade, 
    ScaleFade, 
    Slide, 
    SlideFade,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import{ React,useState} from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { MoonIcon,SunIcon } from '@chakra-ui/icons'
import { useRef } from 'react'

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display,changeDisplay] = useState('none')
    const [iconDisplay,changeIconDisplay] = useState(['flex','flex','none','none'])
    const color = useColorModeValue('black','cyan.300')
    const navBg = useColorModeValue('orange.100','gray.900')
    const colorScheme = useColorModeValue("black","purple.400")
    const variantt = useColorModeValue('light','dark')
    const Home_bg = useColorModeValue('green.200','#2D3748')
    const Home_variant = useColorModeValue('home_light','home_dark')
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box 
            w='100%' 
            bg={navBg}
            color='white' 
            as='nav'
            padding={0}
            margin={0}
            position='fixed'
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                alignItems="center"
                justify="space-between"
                w='full'

            >

                <Flex align='center' w='full'>
                    <NextLink href='/' passHref>
                        <Button    
                            leftIcon={<SunIcon/>}
                            background={Home_bg}
                            variant={Home_variant}
                        >
                            <Text 
                                cursor='pointer'
                                fontFamily="Monospace" marginRight={3} 
                                letterSpacing='0px'
                                transition='0.13s ease-out'
                                fontWeight='800'
                                display={['none','flex','flex']}
                                fontSize={[4,10,15,15]}
                            >The binary pages</Text>
                            

                        </Button>


                    </NextLink>
                    <NextLink href="/" passHref>
                        <Button as="a" color = {color}  leftIcon={<IoLogoGithub/>} variant={variantt} aria-label="Home" mx={2} my={5} >
                        Source
                        </Button>
                    </NextLink>
                </Flex>
                
                <Spacer />
                <Flex 
                    justify="space-between" 
                    w='full' 
                    justifyContent="center" 
                    align="center" 
                    display={['none','none','flex','flex']}
                >
                      <NextLink href='/'>
                        <Button as="a" color = {color}  variant={variantt} aria-label="About" my={5}  marginX={2} cursor='pointer'>
                            Home
                        </Button>
                      </NextLink>
                
                    <NextLink href="/new" passHref>
                        <Button as="a" color = {color}  variant={variantt} aria-label="About" my={5}  marginX={2} >
                        OiOI
                        </Button>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Button as="a" color = {color}  variant={variantt} aria-label="About" my={5}  marginX={2}>
                            About
                        </Button>
                    </NextLink>
                
                
                    <NextLink href="/404" passHref>
                        <Button 
                            // _hover={
                            //     {
                            //         textDecoration:'underline',
                                    
                            //     }
                                
                            // }
                            
                            transition="all 0.28.5s ease-in-out"
                            as="a" 
                            color={color}
                            aria-label="Contact" 
                            my={5} 
                            marginX={2}
                            variant={variantt}
                            
                        >
                            505
                        </Button>
                    </NextLink>
                </Flex>
                
                <IconButton
                    icon = {<HamburgerIcon/>}
                    display={iconDisplay}
                    bg={navBg}
                    color={colorScheme}
                    onClick={onOpen}
                    marginRight={2}
                    variant={variantt}
                    ref={btnRef}
                />
                <IconButton
                    icon={colorMode=='light' ? <SunIcon/> : <MoonIcon/>}
                    variant={variantt}
                    colorScheme='cyan'
                    aria-label='color mode switched'
                    onClick={toggleColorMode}
                />
                {/* mobile nav -------------------------------------------------*/}
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    bg={navBg}
                >
                    <DrawerOverlay/>
                    <DrawerContent bg={navBg}>
                        <DrawerFooter padding='12px'>
                            <IconButton icon = {<CloseIcon/>} bg={navBg} onClick={onClose} variant={variantt} maxW='fit-content'/>
                        </DrawerFooter>
                        <DrawerBody >

                                <Flex 
                                    justify="space-between" 
                                    w='full' 
                                    h='full'
                                    justifyContent="center" 
                                    align="center" 
                                    flexDirection='column'
                                    // display={['none','none','flex','flex']}
                                >
                                        


                                    

                                    <NextLink href="/" passHref>
                                        <Button as="a" color = {color} variant={variantt} aria-label="Home" my={5}  marginX={2} >
                                        Home
                                        </Button>
                                    </NextLink>
                                
                                    <NextLink href="/about" passHref>
                                        <Button as="a" color = {color}variant={variantt}  aria-label="About" my={5}  marginX={2} >
                                        About
                                        </Button>
                                    </NextLink>
                                    <NextLink href="/404" passHref>
                                        <Button as="a" color = {color}variant={variantt} aria-label="About" my={5}  marginX={2} >
                                            505
                                        </Button>
                                    </NextLink>
                                    {/* <NextLink href="/about" passHref>
                                        <Button as="a" color = {color}  colorScheme="teal" variant="ghost" aria-label="About" my={5}  marginX={2}>
                                            Blogs
                                        </Button>
                                    </NextLink>
                                */}
                                
                                    {/* <NextLink href="/contact" passHref>
                                        <Button as="a" colorScheme="teal" variant='ghost' color = {color} aria-label="Contact" my={5} marginX={2} >
                                        Contact
                                        </Button>
                                    </NextLink> */}
                                </Flex>


                            
                        </DrawerBody>
                        <DrawerFooter >
                                    <Text w='100%' textAlign='center' fontSize={{sm:'12px',md:'15px'}}>@2021 all right reserved</Text>
                        </DrawerFooter>
                    </DrawerContent>

                </Drawer>
                
            </Container>
        </Box>

            
            
            
            
            )
        }
        
export default Navbar