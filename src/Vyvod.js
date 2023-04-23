import React from "react";
import Vyvod_compon from "./Components/VyvodComponents/Vyvod_compon";
import { motion } from 'framer-motion';

function Vyvod(){


    return(
        <motion.div className="div_vyvod" style={{overflow: 'hidden'}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration: 0.3}} 
        >
        <Vyvod_compon/>
        </motion.div>
        
    )
}

export default Vyvod;