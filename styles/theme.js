import { extendTheme } from "@chakra-ui/react";
import { darken, mode } from "@chakra-ui/theme-tools";


export const components = {
    IconButton:{
        baseStyle:{
            fontFamily: 'Nunito'
        },
        sizes:{},
        variants:{
            tag:{
                bg:'red.200',
            }
        },
        defaultProps:{
            
        }
    
    },
    Button:{
        baseStyle:{
            fontFamily: 'Nunito'
        },
        sizes:{},
        variants:{
            dark:{
                color:'cyan.300',
                _hover:{
                    color:'pink.500',
                    textDecoration:'underline'
                }
            },
            light:{
                color:'black',
                _hover:{
                    color:'orange.500',
                    textDecoration:'underline'
                }
            },
            home_dark:{
                color:'cyan.300',
                _hover:{
                    color:'pink.500',
                }
            },
            home_light:{
                color:'black',
                _hover:{
                    color:'orange.500'
                }
            },
            socialLight:{
                bg:'pink.100',
                color:'black',
                transition:'0.2s all ease-in-out',
                _hover:{
                    bg:'pink.200'
                }
            },
            social:{
                bg:'blue.900',
                color:'pink.300',
                transition:'0.2s all ease-in-out',
                _hover:{
                    bg:'rgba(118,228,247,0.5)'
                }
                
            }
        },
        defaultProps:{
            
        }
    },
    Heading:{
        baseStyle:{
            fontFamily: 'Nunito'
        },
        sizes:{},
        variants:{
            dark:{
                color:'cyan.300',
                _hover:{
                    color:'pink.500'
                }
            },
            light:{
                color:'black',
                _hover:{
                    color:'orange.500'
                }
            },
            primaryDark:{
                color:'gray.400',
                
    
            },
            primaryLight:{
                color:'#3e3e3e'
            },
            headingTitle:{
                color:'white',
                textDecoration:'underline',
                textUnderlineOffset:4,
                textDecorationThickness:3.5,
            },
            pageTitle:{
                color:'red'
            }
            
        },
        defaultProps:{
            fontFamily: 'Nunito'
        }
    
    }
}

const colors={
    primary: "#845EC2",
    secondary: "#FF6F91",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
}

export const NewTheme = extendTheme({
    components,colors
}); 
