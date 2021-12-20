import { useRouter } from "next/router"
import { Box } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown'
import React from 'react'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'


function BlogPage() {
    const markdown = `A paragraph with *emphasis* and **strong importance**.

        > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

        * Lists
        * [ ] todo
        * [x] done
        * 
        - dsuahd

        A table:

        | a | b |
        | - | - |

        `
    const router = useRouter()
    const BlogId = router.query.BlogId
    return(
            ReactDom.render(
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>,
                document.body
            )
        )
        
    }
    
export default BlogPage;


