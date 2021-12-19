import { Link } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Paragraph } from '../text/paragraph'
export const BlogMenuItem = (props) => {
    return (
        <Link href={props.href} 
            textDecor='none'
            _hover={
                {textDecoration:'none'}
            }
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
        </Link>

    )
}
