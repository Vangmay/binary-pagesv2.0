import React from 'react'
import {
    Box,
    Container,
    Heading,
    useColorModeValue
} from "@chakra-ui/react";
import { BlogParagraph } from "../../components/misc/BlogParagraph"
import { BlogTag } from "../../components/misc/BlogTag"
import fetch from "isomorphic-unfetch"
import {DiscussionEmbed} from "disqus-react"
import Head from 'next/head';

function BlogPage({posts}) {
    const title = posts.title
    const date = posts.date
    const body = posts.body
    const tagg = posts.tag
    const desc = posts.desc 
    const id = posts.id 
    const heroImage = posts.heroImage
    const Title =  title
    const tag   =  tagg
    return(
        
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={desc}/>
                <meta name="og:title" content={title}/>
                <meta name="author" content="Vangmay Sachan" />
                <meta name="og:type" content='website'/>
                <meta name="og:image" content={heroImage}/>
            </Head>
            <Container 
                textAlign='center' 
                minW='100vw' 
                padding={0} 
                backgroundImage={`${heroImage}`}
                minH='75vh'
                backgroundAttachment='fixed'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
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
            <Box 
                w ='100%'
                alignContent='center'
                display='flex'
                justifyContent='center'
            >
                <Box w='70%'>
                <DiscussionEmbed
                    shortname='thebinary-pages'
                    config={
                        {
                            url: 'https://www.thebinary-pages.com/',
                            identifier: id,
                            title: Title
                        }
                    }
                    />
                </Box>
            </Box>
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
    blogPosts.id = id 
    return{
        props:{
            posts:blogPosts
        },
    }
}
