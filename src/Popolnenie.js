import React from "react";
import './popolnenie.scss';
import FooterTab from "./Components/FooterTab";
import Popolnenie_compon from "./Components/Popolnenie_compon";

function Popolnenie(){


    return(
        <div className="div_popolnenie">
        <Popolnenie_compon/>
        <FooterTab className='foot'/>
        </div>
        
    )
}

export default Popolnenie;