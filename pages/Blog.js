import React from 'react'
import { 
    Box, 
    Grid,
    Container
} from '@chakra-ui/react'
import BlogContent from '../components/misc/blogContent'

function Blog() {
    return (
        <Box
            paddingLeft={12}
            paddingRight={12}
            marginBottom={4.5}
        >
            <BlogContent></BlogContent>
        </Box>
    )
}

export default Blog
