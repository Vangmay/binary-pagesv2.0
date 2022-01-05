import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const modelSpinner = () =>{
    <Spinner
        size='xl'
        position='absolute'
        left='50%'
        top = '50%'
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
}

export const Container = forwardRef(({children},ref) => (
    <Box
        ref={ref}
        m="auto"
        w={[120,240,400]}
        h={[120,240,400]}
        display='flex'
        justifyContent='center'
    >
        {children}
    </Box>
))

const Loader = () =>{
    return(
        <Container>
            <modelSpinner/>
        </Container>
    )
}

export default Loader