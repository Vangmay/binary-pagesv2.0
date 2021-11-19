import {whiten} from '@chakra-ui/theme-tools'
export const ButtonStyles = {
    baseStyle:{},
    sizes:{},
    variants:{
        primary:{
            bg:'red',
            color:'white',
            _hover:{
                bg:whiten('red',200)
            }
        }
    },
    defaultProps:{}
}