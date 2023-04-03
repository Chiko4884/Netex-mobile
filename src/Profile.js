import React from "react";
import FooterTab from "./Components/FooterTab";
import ProfileComponent from "./Components/ProfileComponents/ProfileComponent";
import { motion } from 'framer-motion';

function Profile(){


    return(
        <motion.div className="div_popolnenie"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration: 0.3}} 
        >
        <ProfileComponent/>
        </motion.div>
        
    )
}

export default Profile;