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
import fetch from 'isomorphic-unfetch'

function Blog({posts}) {
    // const content = props.posts.data
    // console.log(content[0].attributes.title)
    return (
        <>
            <ImageBox/>
            <Box
                minH='100vh'
            >

                {posts.map(post=>{
                    const id = post.id 
                    const blog = post.attributes
                    console.log(id)
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
                            as={`/blogs/${id}`}
                            >
                                    <a>
                                        <BlogMenuItem
                                            Image={blog.menuImage}
                                            Title={blog.title}
                                            Desc={blog.desc}
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

export async function getServerSideProps(){
    // const idd = router.query.id
    // console.log(idd)
    const res = await fetch('http://localhost:1337/api/posts')
    const {data} = await res.json()
    const posts = data
    // console.log(data)
    // var posts = data.map(blog=>{
    //     return(
    //         blog.attributes.push(blog.id)
    //     )
    // })
    return{
        props:{
            posts:posts
        },
    }
}
// export async function getStaticProps(){
//     const postRes = posts
//     return{
//         props:{
//             postRes
//         }
//     }

// }                                          
