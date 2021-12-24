import React from 'react'
import { 
    Box,
    Grid,
    Heading,
    Spacer,
    useColorModeValue,
    Container,
    HStack,
    Link
} from '@chakra-ui/react'
import Content from './blogs/blogs.json'
import { Paragraph } from '../text/paragraph'
import { BlogParagraph } from './BlogParagraph'
import BlogLayout from '../Layouts/blogLayout'
import { Footer } from '../Footer'
import { BlogMenuItem } from './blogMenuItem'
function BlogContent(){
    return(
        <>
            {   Content.map(blog => {
                return(
                    <Link
                        href={blog.url}
                    
                    >
                        <BlogMenuItem
                            Title={blog.title}
                            Desc={blog.desc}
                            />
                    </Link>

                )
            })}
              
        </>
    )
}
export default BlogContent