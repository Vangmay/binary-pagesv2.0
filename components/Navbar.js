import { 
    useColorModeValue,
    Text,
    useColorMode,
    Box,
    Flex,
    Button,
    Spacer,
    Container,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon, CloseIcon,MoonIcon,SunIcon} from '@chakra-ui/icons'
import{ React,useState,useRef} from 'react'
import { IoLogoGithub,IoHome } from 'react-icons/io5'

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [iconDisplay,changeIconDisplay] = useState(['flex','flex','none','none'])
    const color = useColorModeValue('black','cyan.300')
    const navBg = useColorModeValue('rgba(242 ,232 ,222,0.5)','rgba(23, 25, 35,0.5)')
    const MobnavBg = useColorModeValue('rgba(242,232,222)','rgba(23, 25, 35)')
    const colorScheme = useColorModeValue("black","purple.400")
    const variantt = useColorModeValue('light','dark')
    const Home_bg = useColorModeValue('#eee9e6','#2D3748')
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
            transition='0.20s all ease-in-out'
            zIndex={900000}
            backdropFilter='blur(2px) hue-rotate(20deg) saturate(20%)'
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
                    <NextLink href='/' passHref cursor='none'>
                        <Button    
                            leftIcon={<IoHome/>}
                            background={Home_bg}
                            variant={Home_variant}
                            cursor='none'
                            padding='none'
                        >
                            <Text 
                                ontFamily="Monospace" marginRight={3} 
                                letterSpacing='0px'
                                transition='0.13s ease-out'
                                fontWeight='800'
                                display={{base:'none',md:'flex',lg:'flex'}}
                                fontSize={{base:'0', md:'15',lg:'15'}}
                                cursor='none'
                            >The binary pages</Text>
                            

                        </Button>


                    </NextLink>
                    <a href="https://github.com/Vangmay/binary-pagesv2.0" target='_blank'>
                        <Button as="a" color = {color}  leftIcon={<IoLogoGithub/>} variant={variantt} aria-label="Home" mx={2} my={5} >
                        Source
                        </Button>
                    </a>
                </Flex>
                
                <Spacer />
                <Flex 
                    justify="space-between" 
                    w='full' 
                    justifyContent="center" 
                    align="center" 
                    display={['none','none','flex','flex']}
                >
                    <NextLink href="/About" passHref>
                        <Button         
                            transition="all 0.28.5s ease-in-out"
                            as="a" 
                            color={color}
                            aria-label="About" 
                            my={5} 
                            marginX={2}
                            variant={variantt}
                        >
                            About
                        </Button>
                    </NextLink>
                    <NextLink href="/Works" passHref>
                        <Button as="a" color = {color}  variant={variantt} aria-label="Works" my={5}  marginX={2}>
                            Works
                        </Button>
                    </NextLink>
                    <NextLink href="/Blog" passHref>
                        <Button as="a" color = {color}  variant={variantt} aria-label="Blog" my={5}  marginX={2}>
                            Blogs
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
                    cursor='none'
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
                    bg={MobnavBg}
                    zIndex={900000}
                >
                    <DrawerOverlay/>
                    <DrawerContent 
                        positon='fixed'
                        zIndex={900000}
                        bg={MobnavBg} 
                    
                    >
                        <DrawerFooter padding='12px'>
                            <IconButton icon = {<CloseIcon/>} bg={MobnavBg} onClick={onClose} variant={variantt} maxW='fit-content'/>
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
                                <NextLink href="/About" passHref>
                                    <Button as="a" color = {color}  variant={variantt} aria-label="About" my={5}  marginX={2}>
                                        About
                                    </Button>
                                </NextLink>
                                <NextLink href="/Works" passHref>
                                    <Button as="a" color = {color}  variant={variantt} aria-label="About" my={5}  marginX={2}>
                                        Works
                                    </Button>
                                </NextLink>
                                <NextLink href="/Blog" passHref>
                                    <Button as="a" color = {color}  variant={variantt} aria-label="About" my={5}  marginX={2}>
                                        Blogs
                                    </Button>
                                </NextLink>
                            </Flex>


                            
                        </DrawerBody>
                        <DrawerFooter >
                                    <Text w='100%' textAlign='center' fontSize={{sm:'12px',md:'15px'}}></Text>
                        </DrawerFooter>
                    </DrawerContent>

                </Drawer>
                
            </Container>
        </Box>

            
            
            
            
            )
        }
        
export default Navbar