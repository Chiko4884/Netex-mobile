import React from "react";
import HistoryComponent from "./Components/HistoryComponents/HistoryComponent";
import { motion } from 'framer-motion';

function History(){


    return(
        <motion.div className="div_history"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration: 0.3}} 
        >
        <HistoryComponent/>
        </motion.div>
        
    )
}

export default History;