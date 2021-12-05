import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";


export const components = {
    Button:{
        baseStyle:{

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
            }
        },
        defaultProps:{
            
        }
    },
    Heading:{
        baseStyle:{
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
                color:'black'
            },
            heading:{
                color:'white'
            },
            pageTitle:{
                color:'red'
            }
            
        },
        defaultProps:{
            fontFamily:'monospace'
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
