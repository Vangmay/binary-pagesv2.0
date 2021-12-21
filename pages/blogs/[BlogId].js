import { useRouter } from "next/router"
import ReactMarkdown from 'react-markdown'
import React from 'react'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import { 
    Box,
    Container, 
    Img
} from "@chakra-ui/react";
import { BlogParagraph } from "../../components/misc/BlogParagraph"
import { BlogMenuItem } from "../../components/misc/blogMenuItem"
import { BlogTag } from "../../components/misc/BlogTag"


function BlogPage() {
    const router = useRouter()
    const BlogId = router.query.BlogId
    
    return(
        <>
            <Container textAlign='center' >
                <Img src='/Images/neural.png'
                    
                />
            
                <BlogTag Tag='red'/>

            </Container>
            <Container
                vw='100vw'
                bg='' 
            >

                <BlogParagraph
                    title='hello'
                    content='
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    '
                />
                <BlogParagraph
                    title='hello'
                    content='
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    Okay okay this is a really big paragraph
                    '
                />
            </Container>

        </>
    )
}
    
export default BlogPage;


