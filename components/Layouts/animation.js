import {motion} from "framer-motion"

export const Animation=({children}) => {
    const variants = {
        hidden:{opacity:0,x:20},
        enter:{opacity:1,x:0},
        exit:{opacity:0,x:0},
        transition:{
            delayChildren:0.3,
            StaggerChildren:0.2
        }
    }
    return(
        <motion.div 
            initial="hidden"
            exit="exit"
            animate='enter'
            variants={variants}
            transition={{duration:0.5,type:'easeInOut'}}
        >
            {children}
        </motion.div>
    )
}