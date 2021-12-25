import React from 'react'
import { 
    Box, 
    Grid,
    Container,
    Link,
    
} from '@chakra-ui/react'
import axios from 'axios'
import { BlogMenuItem } from '../components/misc/blogMenuItem.js'
import ImageBox from '../components/misc/ImageBox.js'


function Blog({posts}) {
    // const content = props.posts.data
    // console.log(content[0].attributes.title)
    console.log(posts)
    return (
        <>
            <ImageBox/>

                <Box
                    paddingLeft={12}
                    paddingRight={12}
                    marginBottom={4.5}
                    >
                    <Link

>
                        <BlogMenuItem
                            // title={posts[0].title}
                            
                        />
                    </Link>
                </Box>





            <h1>dshadisj</h1>
        </>
    )
    
}

export default Blog

export async function getStaticProps(){
    const postsRes = await axios.get('http://localhost:1337/api/posts')
    const posts = postsRes.data
    return{props : {posts}}
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