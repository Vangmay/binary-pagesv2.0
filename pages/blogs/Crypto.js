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
    const title = "Crypto Crypto Crypto" 
    const date = "2021-05-31"
    const body = "## **Crypto Crypto Crypto**\n\n![Gpu mining rig.jpg](https://i.imgur.com/KotDq4M.jpg)\n\n\n\n> Everyone seems to be talking about cryptocurrency these days and how they are the reason that everyone seems to be hoarding graphic processing units inside their basements and using it to “Mine” bitcoin...quite an interesting topic right? Mining wealth out of thin air.\n\n  \n  \n\n## **What is a cryptocurrency?** \n\nOkay so, cryptocurrencies are digital assets designed to work like a medium of exchange just like other currencies But the difference is that a crypto currency is usually decentralized meaning that it is not controlled by any government, individual or any regulating authority. \n\nLike banks that deal in normal currency they keep a record of the money that is being handled, so where is all the data for any cryptocurrency being recorded? \n\n  \n\nTurns out that all this is being recorded inside a global ledger, this global ledger is distributed to thousands of devices that run a special software, during a transaction these computers record the special addresses of the receiver,sender and also how many units were exchanged then they write it on a ledger,  this ledger is updated in all other computers in this network. This ledger is called a blockchain. Each and every transaction is verified and recorded onto the blockchain by multiple devices, the devices in this network keep on comparing their copies of the blockchain to other devices to check whether they are running in sync with the latest version or not.\n\nDo you know what the current size of the bitcoin blockchain is? \n\n347.86 GB on May 31 2021\n\nThe bitcoin blockchain was served to public in 2008, since then it has expanded\n\nTo 347.86 GBs in a span of 13 years \n\n  \n\nAfter an entry has been recorded on the ledger it cannot be changed.The blockchain is totally immutable. This brings the question, why can’t I give myself plenty of bitcoins or forge them easily? That is because of the complex verification that is used before a transaction is recorded on a blockchain. \n\n  \n  \n\n## **Verification**\n\nThe verification part of these transactions is what is being performed by miners. \n\nMiners connect to this network and run special softwares that run by grouping the recent transactions into blocks which are only accepted by the rest of the network if they are hashed correctly, otherwise the rest of the network may see it as an invalid entry and prevent it from being recorded into the blockchain hence: “The transaction never happened”\n\nIn the case when the block does get accepted into the block-chain,the network generates a bitcoin as a reward that goes into the miners wallet.\n\n  \n\n## **Hashing**\n\nHere we come to the interesting part, hashing is the process which has made the whole blockchain system intact, robust and tamper proof. \n\nHashing is a simple process of passing data through a mathematical algorithm to alter it in such a way that it becomes unreadable. \n\nThe definition that i provided might seem similar to the term encryption, however if i hash some data it can then never be “un-hashed”, meanwhile data that has been encrypted can always be decrypted into a readable state. \n\n  \n\n“51279E103DBFFCCB8C5A33CE971DF867E9D00A7824F3565B26F3B741E40D4”\n\nThis is an example of hashed data\n\nWhat is inside the double quotes? You will never know\n\n  \n\nThere are many algorithms which are used to do this, most blockchains use sha256. \n\nThis is because sha256 is an algorithm that will always generate a 64 digit hash. \n\nWhen I hash a word, a hash will be generated for it, if I make a small change to that word like if I make one alphabet in that word from lowercase to uppercase the whole hash that will generate will change character by character. \n\n  \n\n## **How does this hashing make blockchain secure?**\n\n![Hello.png](https://i.imgur.com/nBQ85l4.png)![Hell0.png](https://i.imgur.com/OWdYAjD.png) \n\n\n\nLike i told before, transaction records  are hashed in blocks, after which they are recorded in the blockchain. These blocks are stored in a specific sequence, each block has 2 different data one is the data of the transaction block, the second is what we call a “Hash pointer”. A hash pointer is nothing complex but just the hash of the block behind it. So if Block-A and Block-B are in a chain, Block B will contain the hash of the transactions and also the hash of A’s transactions. Why this? Well this is because the hash pointer indicates the position where block B is meant to be placed.\n\n  \n\nLet’s say i try to to alter details of a bitcoin transaction between me and a person(Scott),\n\nIf the original transaction said that \n\n“Scott gives me 1 bitcoin” then this gets stored in block 1\n\n and i try to alter it to \n\n“Scott gives me 3 bitcoins” \n\nNow the hash in block 1 gets changed completely, so which means that the \n\n“Hash pointer” which will be in the block 2 will not match. This disables block 1 and block 2 from attaching in the blockchain, so now where will my forged block 1 go in the blockchain?\n\nThe answer is no where."
    const tagg = "Technology & Finance"
    const desc = "Everyone seems to be talking about cryptocurrency these days and how they are the reason that everyone seems to be hoarding graphic processing units inside their basements and using it to “Mine” bitcoin...quite an interesting topic right? Mining wealth out of thin air. " 
    const id = 2 
    const heroImage = "/Images/bitcoin.webp"
    const Title =  "CryptoCryptoCrypto"
    const tag   =  "Technology & Finance"
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

