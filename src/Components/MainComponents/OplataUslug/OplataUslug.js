import React, { useState } from "react";
import './oplataUslug.scss';
import UserComponent from "../../MainComponents/UserComponent";
import HeaderComponent from "../../HeaderComponent";
import Uslugi_component from "./Uslugi_component";




function OplataUslug(){

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