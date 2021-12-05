import { Heading, Text } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

import React from 'react'
export const Headings = ({ children }) => {
    const theme = useColorModeValue('primaryLight','primaryDark')
    return (
        <Heading  fontSize={{base:'16px', md:'20px'}}variant={theme} as='h2'>
            {children}
        </Heading>
    )
}
