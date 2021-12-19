import React from 'react'
import { 
    Box,
    Heading,
    Spacer,
    useColorModeValue
} from '@chakra-ui/react'
import { Paragraph } from '../text/paragraph'
import { BlogParagraph } from './BlogParagraph'
import BlogLayout from '../Layouts/blogLayout'
import { Footer } from '../Footer'
import { BlogMenuItem } from './blogMenuItem'
const BlogContent = () => {
    return (
        <Box 
            bg={useColorModeValue('#cfc9c2','#24283b')}
            padding={{base:'10px',md:'10px',sm:'8px'}}
            marginTop='12px'
            borderRadius={20}
            transition='0.2s all ease'
            _hover={
                {background:'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15449929971988796) 7%, rgba(0,0,0,1) 69%)'}
            }
        >
            <BlogMenuItem
                Title='neural networks'
                Desc='desc'
                href='/'
            />

            
        </Box>
    

    )
}

export default BlogContent
