import React from "react";
import Popolnenie_compon from "./Components/TorgovlyaComponents/Popolnenie_compon";
import { motion } from 'framer-motion';

function Torgovlya(){


    return(
        <motion.div className="div_Torgovlya"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration: 0.3}} 
        >
        <Popolnenie_compon/>
        </motion.div>
        
    )
}

export default Torgovlya;