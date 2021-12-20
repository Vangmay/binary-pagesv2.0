import { Link } from '@chakra-ui/react'
import React from 'react'
import { Heading,Box,useColorModeValue } from '@chakra-ui/react'
import { Paragraph } from '../text/paragraph'
export const BlogMenuItem = (props) => {
    return (
        <Link href={props.href} 
            textDecor='none'
            _hover={
                {textDecoration:'none'}
            }
            gridArea={props.gridArea}
            bg={useColorModeValue('#cfc9c2','#24283b')}
            padding={{base:'10px',md:'10px',sm:'8px'}}
            marginTop='12px'
            borderRadius={20}
            transition='0.2s all ease'
            _hover={
                {background:'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15449929971988796) 7%, rgba(0,0,0,1) 69%)'}
            }
            onClick={
                "border:'none'"
            }
            
        >
        <Box 
        >

                <Heading 
                as='h3'  
                fontFamily= 'Inconsolata' 
                fontSize={{base:'45px',md:'45px',sm:'35px'}}
                textAlign='left'
                >
                    {props.Title}
                </Heading>
                <Paragraph>
                    {props.Desc}
                </Paragraph>
        </Box>
        </Link>

    )
}
