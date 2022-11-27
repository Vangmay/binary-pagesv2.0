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
                <>
                <motion.div variants={leftSlide}>

                    <Box
                        paddingLeft={12}
                        paddingRight={12}
                        marginBottom={4.5}
                        display='grid'
                        justifyContent='center'
                        >
                        <Link
                        href = '/blogs/IBM'
                        as={`/blogs/IBM_and_their_Decline`}
                        >
                                <a>
                                    <BlogMenuItem
                                        Image={"./Images/IBM.webp"}
                                        Title={"IBM and their decline"}
                                        Desc={"IBM is a great company, but have you ever wondered why they aren't in the personal computer market?"}
                                        />
                                </a>
                        </Link>
                    </Box>
                </motion.div>
                </>
                
                <>
                <motion.div variants={rightSlide}>

                    <Box
                        paddingLeft={12}
                        paddingRight={12}
                        marginBottom={4.5}
                        display='grid'
                        justifyContent='center'
                        >
                        <Link
                        href = '/blogs/NeuralNetworks'
                        as={`/blogs/Neural_Networks`}
                        >
                                <a>
                                    <BlogMenuItem
                                        Image={"./Images/neural.webp"}
                                        Title={"Neural_Networks"}
                                        Desc={"Hey, I was recently diving into the amazing pit of neural networkks and found the science behind these increadibly clever structures to be interesting. So ehre I am sharing it with you!"}
                                        />
                                </a>
                        </Link>
                    </Box>
                </motion.div>
                </>
                
                <>
                <motion.div variants={leftSlide}>

                    <Box
                        paddingLeft={12}
                        paddingRight={12}
                        marginBottom={4.5}
                        display='grid'
                        justifyContent='center'
                        >
                        <Link
                        href = '/blogs/Crypto'
                        as={`/blogs/CryptoCryptoCrypto`}
                        >
                                <a>
                                    <BlogMenuItem
                                        Image={"./Images/bitcoin.webp"}
                                        Title={"Crypto Crypto Crypto"}
                                        Desc={"Everyone seems to be talking about cryptocurrency these days and how they are the reason that everyone seems to be hoarding graphics processing units inside their basements and using it to 'mine' bitcoing...quite an intersting topic right? Mining wealth out of thin air!"}
                                        />
                                </a>
                        </Link>
                    </Box>
                </motion.div>
                </>
                
                <>
                <motion.div variants={rightSlide}>

                    <Box
                        paddingLeft={12}
                        paddingRight={12}
                        marginBottom={4.5}
                        display='grid'
                        justifyContent='center'
                        >
                        <Link
                        href = '/blogs/MachineLearning'
                        as={`/blogs/MachineLearning`}
                        >
                                <a>
                                    <BlogMenuItem
                                        Image={"./Images/machine_learning.webp"}
                                        Title={"Machine learining:Study of computer algorithms"}
                                        Desc={"Machine learning is a process that is present everywhere, innit? It's the reason behind the daily spotify recommendations to GPS systems to self-driving cars, this process is influencing our lives in ways we don't even know about,Did you know that Samsung's smart fridge uses machine learning to recommend recepies based on what's kept inside it?"}
                                        />
                                </a>
                        </Link>
                    </Box>
                </motion.div>
                </>
            </Box>
            </motion.div>
            </>
            )
            
}

export default Blog

// export async function getServerSideProps(){
//     const url = process.env.API_URL
//     const res = await fetch(url)
//     const {data} = await res.json()
//     const posts = data
//     posts.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
//     return{
//         props:{
//             posts:posts
//         },
//     }
// }