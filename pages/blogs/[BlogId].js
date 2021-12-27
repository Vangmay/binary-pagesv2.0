import { useRouter } from "next/router"
import ReactMarkdown from 'react-markdown'
import React from 'react'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import { 
    Box,
    Container, 
    Img,
    Heading,
    useColorModeValue
} from "@chakra-ui/react";
import { BlogParagraph } from "../../components/misc/BlogParagraph"
import { BlogMenuItem } from "../../components/misc/blogMenuItem"
import { BlogTag } from "../../components/misc/BlogTag"
import axios from "axios"
import fetch from "isomorphic-unfetch"
import MardkdownIt from "markdown-it"

function BlogPage({posts}) {
    const md = new MardkdownIt();
    const title = posts.title
    const data = posts.date
    const body = posts.body
    const tagg = posts.tag
    // console.log(posts)
    const Title =  title
    const tag   =  tagg
    const MarkDown = md.render(body)
    return(
        
        <>
            <Container 
                textAlign='center' 
                minW='100vw' 
                padding={0} 
                backgroundImage='/Images/neural.png'
                minH='75vh'
                backgroundAttachment='fixed'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                backgroundSize='100%'
            >   
            

            </Container>
            <Container 
                alignContent='left'
                minW='100vw'
                padding={12}
                paddingLeft={20}
                aria-label ='meta'
                backgroundAttachment='fixed'
            >
                <Heading 
                    fontSize={{base:"50px",md:"40px",sm:'30px'}}
                    >
                    {Title}
                </Heading>
                <Heading
                    fontSize={{base:"20px",md:"18px",sm:'15px'}}
                    fontFamily='Inconsolata'
                    color={useColorModeValue('#24283b','#c0caf5')}
                    letterSpacing={1}
                    >
                    Vangmay_Sachan
                </Heading>
                <Heading
                    fontSize='sm'
                    padding={1.2}
                    color={useColorModeValue('#24283b','#c0caf5')}
                >
                    09/06/2005
                </Heading>
                

                <BlogTag Tag={tag}/>
            </Container>

            <Container
                minW={{base:"75vw",md:"75vw",sm:'100vw'}}
                // padding={{base:"{0}",md:"{0}",sm:"{0.2}"}}
                padding={{base:"{0}",md:"{0}",sm:'{2}'}}
                paddingBottom={5}
            >
                <section/>
                <BlogParagraph
                    content={MarkDown}
                /> 
            </Container>

        </>
    )
}
    
export default BlogPage;

export async function getServerSideProps(context){
    const id = context.query.BlogId
    // const idd = router.query.id
    // console.log(idd)
    const res = await fetch(`http://localhost:1337/api/posts/${id}`)
    const {data} = await res.json()
    const blogPosts = data.attributes
    return{
        props:{
            posts:blogPosts
        },
    }
}
