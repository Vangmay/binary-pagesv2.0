import React from 'react'
import {
    Container,
    Heading,
    useColorModeValue
} from "@chakra-ui/react";
import { BlogParagraph } from "../../components/misc/BlogParagraph"
import { BlogTag } from "../../components/misc/BlogTag"
import fetch from "isomorphic-unfetch"
import MardkdownIt from "markdown-it"

function BlogPage({posts}) {
    const md = new MardkdownIt();
    const title = posts.title
    const date = posts.date
    const body = posts.body
    const tagg = posts.tag
    const heroImage = posts.heroImage
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
                backgroundImage={`${heroImage}`}
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
                    {date}
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
                    content={body}
                /> 
            </Container>

        </>
    )
}
    
export default BlogPage;

export async function getServerSideProps(context){
    const id = context.query.BlogId
    const url = process.env.API_URL
    const urrl = `${url}/${id}`
    const res = await fetch(urrl)
    const {data} = await res.json()
    const blogPosts = data.attributes
    return{
        props:{
            posts:blogPosts
        },
    }
}
