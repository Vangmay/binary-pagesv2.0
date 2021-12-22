import { useRouter } from "next/router"
import ReactMarkdown from 'react-markdown'
import React from 'react'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import { 
    Box,
    Container, 
    Img,
    Heading,
    useColorModeValue
} from "@chakra-ui/react";
import { BlogParagraph } from "../../components/misc/BlogParagraph"
import { BlogMenuItem } from "../../components/misc/blogMenuItem"
import { BlogTag } from "../../components/misc/BlogTag"


function BlogPage() {
    const router = useRouter()
    const BlogId = router.query.BlogId
    const tag = ['tech']
    const Title = ['tech']


    return(
        <>
            <Container textAlign='center' minW='100vw' padding={0} 
                backgroundImage='/Images/neural.png'
                minH='50vh'
                backgroundAttachment='fixed'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                backgroundSize='100%'
            >   
            

            </Container>
            <Container 
                alignContent='left'
                minW='100vw'
                padding={12}
                paddingLeft={20}
                aria-label ='meta'
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
                

                <BlogTag Tag={tag}/>
            </Container>

            <Container
                minW={{base:"75vw",md:"75vw",sm:'100vw'}}
                // padding={{base:"{0}",md:"{0}",sm:"{0.2}"}}
                padding={{base:"{0}",md:"{0}",sm:'{2}'}}
                paddingBottom={5}
            >

                <BlogParagraph
                    title='What is a cryptocurrency?'
                    content='
                    Okay so, cryptocurrencies are digital assets designed to work like a medium of exchange just like other currencies But the difference is that a crypto currency is usually decentralized meaning that it is not controlled by any government, individual or any regulating authority. 
                    Like banks that deal in normal currency they keep a record of the money that is being handled, so where is all the data for any cryptocurrency being recorded? 
                    
                    Turns out that all this is being recorded inside a global ledger, this global ledger is distributed to thousands of devices that run a special software, during a transaction these computers record the special addresses of the receiver,sender and also how many units were exchanged then they write it on a ledger,  this ledger is updated in all other computers in this network. This ledger is called a blockchain. Each and every transaction is verified and recorded onto the blockchain by multiple devices, the devices in this network keep on comparing their copies of the blockchain to other devices to check whether they are running in sync with the latest version or not.
                    Do you know what the current size of the bitcoin blockchain is? 
                    347.86 GB on May 31 2021
                    The bitcoin blockchain was served to public in 2008, since then it has expanded
                    To 347.86 GBs in a span of 13 years 
                    
                    After an entry has been recorded on the ledger it cannot be changed.The blockchain is totally immutable. This brings the question, why can’t I give myself plenty of bitcoins or forge them easily? That is because of the complex verification that is used before a transaction is recorded on a blockchain. 
                    
                    '
                />
                <BlogParagraph
                    title='Verification'
                    content='
                    The verification part of these transactions is what is being performed by miners. 
                    Miners connect to this network and run special softwares that run by grouping the recent transactions into blocks which are only accepted by the rest of the network if they are hashed correctly, otherwise the rest of the network may see it as an invalid entry and prevent it from being recorded into the blockchain hence: “The transaction never happened”
                    In the case when the block does get accepted into the block-chain,the network generates a bitcoin as a reward that goes into the miners wallet.
                    '
                />
                <BlogParagraph
                    title='Hashing'
                    content='
                    Here we come to the interesting part, hashing is the process which has made the whole blockchain system intact, robust and tamper proof. 
                    Hashing is a simple process of passing data through a mathematical algorithm to alter it in such a way that it becomes unreadable. 
                    The definition that i provided might seem similar to the term encryption, however if i hash some data it can then never be “un-hashed”, meanwhile data that has been encrypted can always be decrypted into a readable state. 
                    
                    “51279E103DBFFCCB8C5A33CE971DF867E9D00A7824F3565B26F3B741E40D4”
                    This is an example of hashed data
                    What is inside the double quotes? You will never know
                    
                    There are many algorithms which are used to do this, most blockchains use sha256. 
                    This is because sha256 is an algorithm that will always generate a 64 digit hash. 
                    When I hash a word, a hash will be generated for it, if I make a small change to that word like if I make one alphabet in that word from lowercase to uppercase the whole hash that will generate will change character by character.
                    
                    '
                />
                <BlogParagraph
                    title='How does this hashing make blockchain secure?'
                    content='
                    Like i told before, transaction records  are hashed in blocks, after which they are recorded in the blockchain. These blocks are stored in a specific sequence, each block has 2 different data one is the data of the transaction block, the second is what we call a “Hash pointer”. A hash pointer is nothing complex but just the hash of the block behind it. So if Block-A and Block-B are in a chain, Block B will contain the hash of the transactions and also the hash of A’s transactions. Why this? Well this is because the hash pointer indicates the position where block B is meant to be placed.

                    Let’s say i try to to alter details of a bitcoin transaction between me and a person(Scott),
                    If the original transaction said that 
                    “Scott gives me 1 bitcoin” then this gets stored in block 1
                     and i try to alter it to 
                    “Scott gives me 3 bitcoins” 
                    Now the hash in block 1 gets changed completely, so which means that the 
                    “Hash pointer” which will be in the block 2 will not match. This disable block 1 and block 2 from attaching in the blockchain, so now where will my forged block 1 go in the blockchain?
                    The answer is no where. 
                    
                    '
                />
            </Container>

        </>
    )
}
    
export default BlogPage;


