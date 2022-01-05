import React from 'react'
import { 
    Box
} from '@chakra-ui/react'
import Link from 'next/link'
import { BlogMenuItem } from '../components/misc/blogMenuItem.js'
import ImageBox from '../components/misc/ImageBox.js'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'
const variants  = {
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.15
        },
    },
    exit:{
        opacity:0,
        transition:{
            transition:{
                staggerChildren:0.15
            }
        }
    }
}
const leftSlide = {
    hidden:{
        opacity:0,
        x:-50,
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            duration:0.65
        }
    },
    exit:{
        opacity:0,
        x:-50,
        transition:{
            duration:0.65
        }
    }
}
const rightSlide = {
    hidden:{
        opacity:0,
        x:50
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            duration:0.65
        }
    },
    exit:{
        opacity:0,
        x:50,
        transition:{
            duration:0.65
        }
    }
}
function Blog({posts}) {
    // const content = props.posts.data
    // console.log(content[0].attributes.title)
    
    return (
        <>
            <ImageBox/>
            <motion.div variants={variants} exit='exit' animate='show' initial = 'hidden'>
            <Box
                minH='100vh'
            >

                {posts.map(post=>{
                    const id = post.id 
                    const blog = post.attributes
                    console.log(id)
                    if (id % 2 == 0) {
                        var slide = rightSlide
                    } else {
                        var slide = leftSlide
                    }
                    return(
                        <>
                        <motion.div variants={slide}>

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
                        </motion.div>
                        </>
                )
            })}
            </Box>
            </motion.div>
            
            </>
            )
            
}

export default Blog

export async function getServerSideProps(){
    const url = process.env.API_URL
    const res = await fetch(url)
    const {data} = await res.json()
    const posts = data
    return{
        props:{
            posts:posts
        },
    }
}