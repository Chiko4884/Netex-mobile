import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import './vyvod_compon.scss';
import UserComponent from "./UserComponent";
import VariantCripto from "./VariantCripto";
import WalletComponent from "./WalletComponent";


function Vyvod_compon(){

    return(
        <div className="korobka_vyvod">
        <div className='vyvod_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/">Назад</Link>
            <h3>Вывод</h3>
        </div>
        <UserComponent/>
    
        <div className="div_inp_monety">
            <h1>Вывод на карту</h1>
            <p>Выберите тип монет</p>
            <input className="poisk_inp"/>
            <img src="./img/search_sign.svg"/>
        </div>


        <div className="div_h1">
            <h1>Доступные варианты</h1>
        </div>
        <WalletComponent/>


        
    </div>

    )
}

export default Vyvod_compon;