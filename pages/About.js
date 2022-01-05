import ImageBox from '../components/misc/ImageBox'
import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { MeetMe } from '../components/misc/about'
export default function About() {
  return (
    <Box 
      bg={useColorModeValue('rgba(242 232 222)','gray.900')}
    > 
        <ImageBox/>
        <MeetMe/>  
    </Box>
  )
}



        