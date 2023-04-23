import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import './vyvod_compon.scss';
import UserComponent from "../MainComponents/UserComponent";
import WalletComponentVyvod from "./WalletComponentVyvod";
import HeaderComponent from "../HeaderComponent";




function Vyvod_compon(){

    return(
        <div className="korob_vyvod">
<HeaderComponent title = 'Вывод'/>
<div className="vyvod_body">
        <UserComponent/>

        <WalletComponentVyvod/>

        </div>
        
    </div>

    )
}

export default Vyvod_compon;