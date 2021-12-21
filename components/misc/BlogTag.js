import React from 'react'
import{
    Button, Heading
}from '@chakra-ui/react'

export const BlogTag = (props) => {
    return (
        <Button 
            margin='4.2px'
            bg='Transparent'
            _hover={
                {background:'Transparent',boxShadow:'0px 0px black'}
            }
            border='2px dashed #3e3e3e'
            
            boxShadow='10px 6px  black'
            _focus={
                {border:'2px dashed #3e3e3e'}
            }
            minW={100}
            alignContent='center'
            padding={2}
         >   
            <Heading
                as='h6'
                fontFamily='Inconsolata'
                fontSize={{base:'24px',md:'24px',sm:'sm'}}
                
            >
                {props.Tag}
            </Heading>
        </Button>
    )
}
