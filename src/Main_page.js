import React from 'react'
import './main_page.scss'
import './Components/footerTab.scss'
import Main_component from './Components/MainComponents/Main_component';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { motion } from 'framer-motion';


function Main_page(){
    const navigate = useNavigate()

        useEffect(() => {
            if (localStorage.getItem('user') == null){
                navigate('/auth_page')
            }
        }, [])
    

return   (
    
    <motion.div className="main_container"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: 0.3}} 
    >

        <Main_component/>
    
    </motion.div>

  
    )

}
export default Main_page;
