import React from "react";
import './popolnenie.scss';
import FooterTab from "./Components/FooterTab";
import Vyvod_compon from "./Components/Vyvod_compon";

function Vyvod(){


    return(
        <div className="div_vyvod">
        <Vyvod_compon/>
        <FooterTab/>
        </div>
        
    )
}

export default Vyvod;