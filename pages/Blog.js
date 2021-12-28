import React from 'react'
import { 
    Box, 
    Grid,
    Container,
    SimpleGrid,
    GridItem
} from '@chakra-ui/react'
import Link from 'next/link'
import axios from 'axios'
import { BlogMenuItem } from '../components/misc/blogMenuItem.js'
import ImageBox from '../components/misc/ImageBox.js'
import posts from './blogs/data.js'

function Blog(props) {
    // const content = props.posts.data
    // console.log(content[0].attributes.title)
    const blogPosts = props.postRes

    return (
        <>
            <ImageBox/>
            <Box
                minH='100vh'
            >

                {blogPosts.map(blog=>{
                    return(
                        <>
                        <Box
                            paddingLeft={12}
                            paddingRight={12}
                            marginBottom={4.5}
                            display='grid'
                            justifyContent='center'
                        >
                            <Link
                            href = '/blogs/[BlogId]'
                            as={`/blogs/${blog.Id}`}
                            >
                                    <a>
                                        <BlogMenuItem
                                            Image={blog.Image}
                                            Title={blog.Title}
                                            Desc={blog.Desc}
                                            />
                                    </a>
                            </Link>
                        </Box>
                        </>
                )
            })}
            </Box>

        </>
    )
    
}

export default Blog

export async function getStaticProps(){
    const postRes = posts
    return{
        props:{
            postRes
        }
    }

}                                          