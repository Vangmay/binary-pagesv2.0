import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

export const Cursor = () => {
    const cursorRef = React.useRef(null)
    React.useEffect(()=>{
        document.addEventListener('mousemove',(event)=>{
            const {clientX, clientY} = event
            const mouseX = clientX - cursorRef.current.clientWidth/2
            const mouseY = clientY - cursorRef.current.clientHeight/2
            cursorRef.current.style.transform =`translate3d(${mouseX}px,${mouseY}px,0px)`
            
        })
    },[])
    const Color = useColorModeValue('#ededed','#ededed')
    const bg = useColorModeValue('rbga(20, 20, 20,0.8)','rbga(242, 242, 242,0.3)')
    var rotation = 1
    return (
        <Box
            borderRadius='50%' 
            height='30px'
            width='30px'
            pointerEvents='none'
            transform = 'translate3d(0,0,0)'
            opacity='0.8'
            // mixBlendMode='exclusion'
            backdropFilter='blur(1px) saturate(200%) brightness(120%)'
            position='fixed'
            zIndex='100000'
            border='2.5px dotted'
            display={{base:'none',md:'flex',lg:'flex'}}
            borderColor={Color}
            bg={bg}
            // onMouseMove={
            //     {transfrom:`rotate(${rotation} + deg)`}
            // }
            ref={cursorRef}
        />
    )
}
