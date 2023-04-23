
import React, { useState, useEffect } from 'react'
import  './zastavka.scss';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

function Zastavka(){

    const [show, setShow] = useState(true)

    useEffect(() => {
      const timeId = setTimeout(() => {
        setShow(false)
      }, 2000)
  
      return () => {
        clearTimeout(timeId)
      }
    }, []);

    if (!show){
        return (
            <></>
        )
    }


    return (
        <AnimatePresence>
        <motion.div className='container'
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 0.3}} 
        >
        <img className='logo' src= './img/netex_logo.svg'/>
        </motion.div>
        </AnimatePresence>
    )


}

export default Zastavka;