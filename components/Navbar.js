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
} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import{ React,useState} from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { MoonIcon,SunIcon } from '@chakra-ui/icons'

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display,changeDisplay] = useState('none')
    const [iconDisplay,changeIconDisplay] = useState(['flex','flex','none','none'])
    const color = useColorModeValue('black','cyan.300')
    const navBg = useColorModeValue('orange.100','gray.900')
    const colorScheme = useColorModeValue("black","purple.400")
    
    return (
        <Box 
            w='full' 
            bg={navBg}
            color='white' 
            as='nav'
            backdropFilter="blur(1222px)"
            padding={0}
            margin={0}
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
                    <Text fontFamily="Monospace" marginRight={3} color = {color} >The binary pages</Text>
                    <NextLink href="/" passHref>
                        <Button as="a" color = {color} colorScheme="teal" leftIcon={<IoLogoGithub/>} variant='ghost' aria-label="Home" my={5} >
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
                        <Button as="a" color = {color} colorScheme="teal" variant='ghost' aria-label="About" my={5}  marginX={2} >
                            Home
                        </Button>
                      </NextLink>
                
                    <NextLink href="/new" passHref>
                        <Button as="a" color = {color} colorScheme="teal" variant='ghost' aria-label="About" my={5}  marginX={2} >
                        OiOI
                        </Button>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Button as="a" color = {color}  colorScheme="teal" variant="ghost" aria-label="About" my={5}  marginX={2}>
                            About
                        </Button>
                    </NextLink>
                
                
                    <NextLink href="/404" passHref>
                        <Button 
                            
                            transition="all 0.28.5s ease-in-out"
                            as="a" 
                            colorScheme="teal" 
                            variant='primary' 
                            color = {color} 
                            aria-label="Contact" 
                            my={5} 
                            marginX={2} 
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
                    onClick={()=>{
                        changeDisplay('flex')
                        changeIconDisplay('none')
                    }}
                />
                <Switch 
                    margin="12px" 
                    color="purple"
                    isChecked={isDark} 
                    onChange={toggleColorMode}
                />
                <IconButton
                    icon={colorMode=='light' ? <SunIcon/> : <MoonIcon/>}
                    variant='outline'
                    colorScheme='cyan'
                    aria-label='color mode switched'
                    onClick={toggleColorMode}
                >

                </IconButton>
                <Container
                    display={display}
                    w='100vw'
                    height='100vh'
                    bg={navBg}
                >
                    <Flex 
                        justify="space-between" 
                        w='full' 
                        justifyContent="center" 
                        align="center" 
                        flexDirection='column'
                        // display={['none','none','flex','flex']}
                    >
                        <IconButton
                            icon = {<CloseIcon/>}
                            color={colorScheme}
                            bg={navBg}
                            // display={['flex','flex','none','none']}
                            onClick={()=>{
                                changeDisplay('none')
                                changeIconDisplay(['flex','flex','none','none'])
                            }}
                        />

                        <NextLink href="/" passHref>
                            <Button as="a" color = {color}  colorScheme="teal" variant='ghost' aria-label="Home" my={5}  marginX={2} >
                            Home
                            </Button>
                        </NextLink>
                    
                        <NextLink href="/about" passHref>
                            <Button as="a" color = {color} colorScheme="teal" variant='ghost' aria-label="About" my={5}  marginX={2} >
                            About
                            </Button>
                        </NextLink>
                        <NextLink href="/404" passHref>
                            <Button as="a" color = {color} colorScheme="teal" variant='ghost' aria-label="About" my={5}  marginX={2} >
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
                </Container>
            </Container>
        </Box>

            
            
            
            
            )
        }
        
export default Navbar