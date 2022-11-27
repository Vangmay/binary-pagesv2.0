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
    const title = "Machine learning:Study of computer algorithms"
    const date = "2021-05-26"
    const body = "\n  \n\n> Let's start with a simple question, do you know how much data currently the human race as a whole has generated? (PS. The answer may really surprise you). Well, just about 59 zettabytes in 2020 (or 59 multiplied by 10^21 GB for easier terms). Now, you might be thinking what are we supposed to do with all that data. But as a matter of fact that data is one of the essential aspects of an advanced process called ‘machine learning’. \n\n\n  \n\n## **Tip of the iceberg**\n\n\n\n\n> ![antarctic-icebergs.jpg](https://i.imgur.com/7xBSxQu.jpg)\n\n\n\nIt is a process that consists of two basic parts: the “Training” and the “Prediction”. Both of these are executed by the model itself, and only the development and the feeding of data is done by humans. \n\nA model in machine learning is a file that has been trained to recognize certain types of patterns, that can be usual searching habits taken from internet users all over the world.\n\nPatterns in music that can be linked to the number of its listeners, to even patterns involving the moves made by chess players based on their reactions to various situations on the board. The model feeds on this data then it learns using algorithms and evolves itself and learns what moves it should make depending on millions of scenarios.\n\nFor example, if we make a simple system to answer a questions that weather a specified specimen is a dog or a cat, we will feed our model data based on several features that are present on dogs and cats, like the shape of their face, fur color and body measurements,this data is fed to the model where it trains to understand that what is a dog and what is a cat then later on it is evaluated using tests to see what is the level of accuracy for the predictions are provided by the model. \n\n  \n\n## **Origin**\n\nMachine learning originated in 1952 even though it wasn’t that common in the world of tech before it has now become more common in our lives than ever, from the google autocomplete to even the ads that we see online but not just that, if you are a Spotify user you must know about the personalised playlists they make, that also requires a major implementation of machine learning where the algorithm predicts your choices based on the choices of other similar users and that’s not it the algorithm can also detect what language to you prefer your songs to be then recommend it accordingly.It is a feature that is now looked as staple in most computers programs/services that we use. \n\n  \n\n## **The history of machine learning**\n\nBack in 1950s, Arthur Samuel of IBM developed a computer program for playing checkers,in which the human player will be playing with the computer program itself, so for allowing the program to move according to the moves that are being played by the human player he used a minimax strategy that is now called the minimax algorithm, this algorithm worked by looking ahead in the future positions of pieces in the game before deciding what move it wants to make in the current position this allowed the model to lay out various scenarios and process them to predict which will be the most beneficial for winning. \n\nDeep Blue was a computer developed in 1995 and was designed for playing chess,it used brute force computing and was capable of evaluating 200 million chess board positions per seconds. \n\n> ![deep blue.jpeg](https://i.imgur.com/ULUavxt.jpg)\n\nMachine learning was the process that made facial recognition possible in 2006, when a National institute of Standards and technology program assessed the popular face recognition algorithms of that time and their tests came to conclusions that the new algorithms were ten times more accurate that the previous versions. In 2012,Google’s X lab developed an algorithm that could browse and find video that had cats in it and in 2014 Facebook developed DeepFace, an algorithm capable of identifying individuals in photographs with the same accuracy as humans.\n\n  \n\n## **Machine learning in today’s world**\n\nOne of the most life changing advancement made possible by the help of machine learning is in the field of medical diagnostics , In 2018 google released a presentation to showcase a machine learning project that had the ability to go through a patient’s cells in real-time as a microscope is being hovered over them and immediately point out cells that had the concern of cancer development.\n\nResearchers in China used deep machine learning for detecting brain tumors using MR images with more that 93% accuracy.\n\nThe limitations of Machine learning are not only limited to the medical fields but also the stock market, machine learning models can predict whether stocks of a particular company will go up or down, how much risk can be involved and whether that investment might be beneficial in the long term or not." 
    const tagg = "Technology"
    const desc = "Everyone seems to be talking about cryptocurrency these days and how they are the reason that everyone seems to be hoarding graphic processing units inside their basements and using it to “Mine” bitcoin...quite an interesting topic right? Mining wealth out of thin air. " 
    const id = 2 
    const heroImage = "/Images/CPU.webp"
    const Title =  "Machine learning:Study of computer algorithms"
    const tag   =  "Technology"
    const Shortname = 'thebinary-pages'
    const Config = {
        identifier:id,
        url :`https://www.thebinary-pages.com`,
        title:Title, 
    }
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
                    shortname={Shortname}
                    config={Config}
                />
                </Box>
            </Box>
        </>
    )
}

    
export default BlogPage;

