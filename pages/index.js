import ImageBox from '../components/misc/ImageBox'
import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Hero from '../components/misc/Hero'
export default function Home() {
  return (
    <Box 
      bg={useColorModeValue('rgba(242 232 222)','gray.900')}
    > 
      <ImageBox/>
      <Hero/>
    </Box>
  )
}



        