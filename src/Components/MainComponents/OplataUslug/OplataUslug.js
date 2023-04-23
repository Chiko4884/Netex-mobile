import React, { useState } from "react";
import './oplataUslug.scss';
import UserComponent from "../../MainComponents/UserComponent";
import HeaderComponent from "../../HeaderComponent";
import Uslugi_component from "./Uslugi_component";
import { useContext } from "react";
import { CustomContext } from "../../../Context";
import { useEffect } from "react";




function OplataUslug(){
    // const{uslugaName, setUslugaName, clickedItemId, setClickedItemId} = useContext(CustomContext)

    return(
        <div className="korobka_oplata">
    <HeaderComponent title = 'Оплата услуг'/>
    <div className="oplata_body">
        <UserComponent/>

        <Uslugi_component/>

        </div>
    </div>

    )
}

export default OplataUslug;