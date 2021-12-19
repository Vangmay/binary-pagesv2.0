import { 
    Box,
    useColorModeValue 
} from "@chakra-ui/react";



import React from 'react'

function BlogLayout({children}) {
    return (
    <>
        <Box 
            bg={useColorModeValue('#cfc9c2','#24283b')}
            padding={{base:'10px',md:'10px',sm:'8px'}}
            marginTop='12px'
            borderRadius={20}
            maxH='fitContent'
            >
        </Box>
    </>
    )
}

export default BlogLayout
