import React from 'react'
import { 
    Box,
    Grid,
    Heading,
    Spacer,
    useColorModeValue,
    Container
} from '@chakra-ui/react'
import { Paragraph } from '../text/paragraph'
import { BlogParagraph } from './BlogParagraph'
import BlogLayout from '../Layouts/blogLayout'
import { Footer } from '../Footer'
import { BlogMenuItem } from './blogMenuItem'
const BlogContent = () => {
    return (
        
            <Grid 
                gridTemplateColumns='repeat(3,1fr)'
                gridTemplateRow='repeat(5,1fr)'
                gridColumnGap={2}
                gridRowGap={1.2}
                h='100vh'
            >

                <BlogMenuItem
                    Title='hello'
                    Desc='hello'
                    gridArea='1/1/3/3'
                    />
                <BlogMenuItem
                    Title='hello'
                    Desc='hello'
                    href='https://youtube.com'
                    gridArea='1/3/5/4'
                    />
                <BlogMenuItem
                    Title='hello'
                    Desc='hello'
                    href='https://youtube.com'
                    gridArea='5/2/6/4'
                />
                <BlogMenuItem
                    Title='hello'
                    Desc='hello'
                    href='https://youtube.com'
                    gridArea='3/1/5/3'
                />
                <BlogMenuItem
                    Title='hello'
                    Desc='hello'
                    href='https://youtube.com'
                    gridArea='5/1/6/2'
                />
            </Grid>
    )
}
export default BlogContent