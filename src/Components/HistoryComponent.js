import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import './historyComponent.scss';
import UserComponent from "./UserComponent";
import VariantFiat from "./VariantFiat";
import WalletComponent from "./WalletComponent";


function HistoryComponent(){

    return(
        <div className="korobka_history">
        <div className='history_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/main_page">Назад</Link>
            <h3>История</h3>
        </div>
        {/* value={value_srok} onChange={changeSelect_srok} */}
        <select className="select"> 
                    <option value="1">Все операции</option>
                    <option value="2">Пополнение</option>
                    <option value="3">Покупка</option>
                    <option value="4">Блокировка</option>
        </select>

        <div className="div_date">
        <input id="start_date" type='date'/> <input id="end_date" type='date'/>
        </div>


        <div className="div_list_oper">
            <h1>Список операций</h1>
        </div>
        <VariantFiat/>

    </div>

    )
}

export default HistoryComponent;