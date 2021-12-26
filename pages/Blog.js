import React from 'react'
import { 
    Box, 
    Grid,
    Container,
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

            {blogPosts.map(blog=>{
                return(
                    <Box
                        paddingLeft={12}
                        paddingRight={12}
                        marginBottom={4.5}
                        >
                        <Link
                            href = '/blogs/[BlogId]'
                            as={`/blogs/${blog.Id}`}
                        >
                            <a>
                                <BlogMenuItem
                                    Title={blog.Title}
                                    Desc={blog.Desc}
                                />
                            </a>
                        </Link>
                    </Box>

                )
            })}
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

                        
                            
                            





// export async function getStaticPaths(){
//     const postsRes = await fetch('http://localhost:1337/api/posts')
//     const data = await postsRes.json();

//     const paths = data.map(blog => {
//         return{
//             params:{id:blog.id.toString()}
//         }
//     })
//     return {
//         paths,
//         fallback:false
//     }
// }

// export const getStaticProps = async(context)=>{
//     const id = context.params.id;
//     const res = await fetch('http://localhost:1337/api/posts/'+id)
//     const data = await res.json()
//     return{
//         props:{blogPost: data}
//     }
// }