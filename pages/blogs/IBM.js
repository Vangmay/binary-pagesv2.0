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
    const body = "> Accept it or not, IBM has always played a major role in many different innovations inside the world of computing and computers. Once upon a time “The big blue” was a word on everybody’s tongue. So what was it that led to the fall of IBM? I could have been writing this blog on a latest IBM pc equipped with the latest silicon, but what led to such a thing never existing? Especially with a company that used to be this big?\n\n\n## **Beginning of IBM**\n\n\n\nIBM was founded by Charles Ranlett Flint in 1911, when 3 companies: Computing scale company,time recording company and tabulating machine company merged. \n\nThey sold punch card based data recording machines,electronic tabulating machines,meat and cheese slices. Yes those last two products are completely out of context but I promise, the IBM i am talking about is International Business Machines Corporation.\n\n\n![Punch_cards](https://i.imgur.com/g0r1imA.jpg)\n\n\nIBM punch card based devices helped a lot of companies to handle a large amount of data so they gained the attention of the government. The US government used this technology to keep records of their citizens. EVEN NAZIS USED IT TO KEEP TRACK OF JEWS AT A POINT IN HISTORY. Yes IBM is really that old. \n\n![image](https://i.imgur.com/fHhuSoW.jpeg)\n\n## **Influence of IBM**\n\nIBM introduced the world to the hard drive in 1956, the legendary “305 RAMAC” which was the first hard disk based computer. It was about the size of 2 stacked refrigerators, it had a capacity of 5MB and required planes for transportation.Also, the 305 RAMAC required an entire room to operate.  \n\nIBM later proceeded to make the world believe that COMPUTERS CAN LEARN, with the help of Arther L Samuel who programmed a system so that it could play checkers and also it was able to learn from its experience, almost like a real human. It was one of the first applications of artificial intelligence. \n\nLater on, IBM collaborated heavily with NASA and yes they were the computers behind the apollo mission.The apollo 11 flight had Apollo Guidance Computer inside it which served as the source for computation for electronic devices for guidance,navigation and also the control of spacecraft. So technically, it wouldn’t be possible for NASA to reach the moon without IBM.\n\nBy 1964, IBM had strengthened their contribution to the corporate world by creating full blown systems like IBM system/360 for all sorts of business firms. \n\nThey also developed the first commercial programming language “FORTRAN”. But it's a dead language right? Who cares! NO Fortran is invincible, It is still actively being used. Nasa scientists use it, it is being used in particle accelerators for estimating residual radiation levels. It is being used in the field of physics ALOT, especially because it allows better support for calculations and array manipulation while still being faster. \n\n## **Okay but then why hasn’t IBM conquered the personal computer market?**\n\nIn the 1980s, IBM had decided to enter the PC market, so a small team was assigned to work on it and when everything was complete all they needed was an operating system. \n\nSo IBM approached Bill Gates of Microsoft, which was a very small company at that time. They made Bill sign an NDA and in the meeting Bill advised IBM to approach Gary Killdall since Microsoft had not developed any operating system at that time. \n\nGary Killdall on the other hand, was the first person to ever develop an operating system back in 1974! \n\n![Gary_Killdall](https://i.imgur.com/YkP5HxA.png)\n\nGary had developed a programming language for the intel 4004 processor(Intel’s first CPU) but the problem was that there was no way that the CPU could interact with the system, so Gary fixed it by developing CP/M (Control program for microprocessors). Before CPM every computer required its own totally unique operating system!\n\nThe most shocking thing was that Gary Kildall, despite being such a talented man, did all of this just as a hobby! So all of his creations were not licensed or copyrighted. Later on his wife convinced him to start a business, so Gary Kildall made “Digital research”, which became the first company to cross people’s mind when they thought about operating systems.\n\nSo back to the timeline. While IBM officials were on their way to Gary’s house Bill called Gary to let him know that some important clients were coming, Bill did not provide much details because of the NDA. Even with that information, Gary was flying his plane while IBM officials visited.\n\nGary had lost his chance. \n\n## **And  on this day the entire history changed**\n\nA few days later after the failed meeting with Gary Kildall, IBM once again reached out to Bill Gates. Bill then accepted IBM’s offer of making an operating system for them, even though they did not have one in the first place. \n\nMicrosoft then bought an operating system from a small company for $75000 named “QDOS”(Quick and dirty operating system), which was a copy of CP/M. \n\nQDOS then became the MicroSoft Disk Operating System(MS-DOS) which later became Microsoft Windows.\n\nSince that day, IBM has been doing extremely well in the PC market. THEY EVEN CROSSED THE APPLE.\n\nThe apple was no longer mightier than the pen. \n\nLooking at the profits and revenue from this new market, many other manufacturers like Compaq started stepping in. Bill Gates then went on to play the ultimate corporate card and that is when disaster struck for IBM.\n\nBill Gates was a clever man, while making the MS-DOS he had never signed a non-exclusive deal, meaning that Bill could now sell MS-DOS to whoever he wanted to. \n\nAndddddddd as you might have realised, that is what happened.\n\nMicrosoft began to sell their operating systems to IBMs competitors, so now IBM lost their main advantage since MS-DOS basically gave them the edge over other personal computers on the market. \n\nOn the other hand, when Gary realised the magnitude of his mistake of missing a meeting he threatened to sue IBM and they agreed to provide CP/M as an option with IBM PCs. BUT CP/M priced at a huge $120, a price that nobody would be pleased about since MS-DOS sold for $40 and both operating systems were almost identical. So since almost nobody would buy it, CP/M unfortunately faded away after being defeated by its own clone. \n\nIBM lost to Bill gates. Gary lost to IBM and a clone of his creation.\n\nIBMs pc sales declined, even after their attempt to increase the numbers by releasing OS2, which did not catch on with the increasingly demanding market. \n\nIMB broke down by 1995, they were unsuccessful in bringing revenue. \n\nThey were not in a position to ride the rapidly evolving waves of the market. \n\n## **What was next for IBM?**\n\nLuckily they were still doing very well and Alive in the supercomputing world. They proceeded to develop deep blue, which was a chess playing computer and it defeated Garry Kasparov who in his career was ranked the world no.1 for 255 months!\n\nI have talked about deep blue in my machine learning blog. \n\nAlso, IBM sold their line of Thinkpad computers to Lenovo. \n\nIBM shifted their focus once again to what they had always excelled at.Research. \n\n**What are they doing now?**\n\nThe research work being done by IBM is now heavily impacting computing industries. \n\nThey have worked on carbon nanotube transistors. \n\nAnd also their work in the field of quantum computing is just amazing!\n\nIBM has services that allow you to build quantum circuits and test them on real quantum hardware that they own! Isn’t it just amazing? Access a quantum computer! Sounds fun right?\n\n[Here](https://quantum-computing.ibm.com/composer/files/new?initial=N4IgjghgzgtiBcIDyAFAogOQIoEEDKAsgAQBMAdAAwDcAOgHYCWdAxgDYCuAJgKZE3jdWDAEYBGMk2b9ademABO3AOZEwAbRIBdGc0UrmG7fXogANCDoQY3BCAIBPIgDMG8qABcizV83YN3ZiA8ULoMAA7uDAD2dLY4RABCgqxEHhDuNgC%2BQA) try for yourself!)\n\nAlso, they have recently developed processors that have a 2nm gap between the transistors, so the number of transistors that can be put onto a small processor will soon greatly increase. It is a big technology."
    const tagg = "History"
    const desc = "IBM is a great company, but have you ever wondered why they aren't in the personal computer market? " 
    const id = 4 
    const heroImage = "/Images/IBM.webp"
    const Title =  "IBM and their decline"
    const tag   =  "History"
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

