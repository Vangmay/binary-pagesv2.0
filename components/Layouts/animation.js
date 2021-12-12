import {motion} from "framer-motion"

export const Animation=({children}) => {
    const variants = {
        hidden:{opacity:0,x:200},
        enter:{
            opacity:1,
            x:0,
            transition:{
                type:'easeInOut',
                duration:1.3
            }
        },
        exit:{opacity:0,x:200}
    }
    return(
        <motion.div 
            variants={variants}
            initial="hidden"
            exit="exit"
            animate="enter"
        >
            {children}
        </motion.div>
    )
}