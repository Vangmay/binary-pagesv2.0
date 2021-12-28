import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
export const BlogParagraph = (props) => {
    const textColor = useColorModeValue('#24283b','#c0caf5')
    const newTheme = {
        p: props => {
          const { children } = props;
          return (
            <Heading mb={2} fontSize='12px'>
              {children}
            </Heading>
          );
        },
    };
    return (
        <Box
        paddingTop={{base:"{3}", md:"{3}",sm:"{1.2}"}} 
        >
            <Heading
                fontSize={{base:'30px',md:'30px',sm:'25px'}}
                as='h1'
                >
                {props.title}
            </Heading>
            
            <Heading 
                fontSize={{base:'18px',sm:'18px',md:'22px'}}
                as='h3'
                textAlign='left'
                color={textColor}
            >
                {props.content}
                <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={props.content} skipHtml />;
            </Heading>
        </Box>
        
    )
}

