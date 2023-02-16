import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './currencyRates.scss';
import { currencyRates } from "../Datas/currencyRates";

function CurrencyRates(){


    return(
        <div className="korobka_currency">
        <div className='pop_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/popolnenie">Назад</Link>
            <h3>Курсы валют</h3>
        </div>


        <div className="div_search">
            <h3>Пополнить баланс</h3>
            <input className="search_input" />
            <img className="search_img" src="./img/search_sign.png"/>
        </div>



        <div className="div_dostupn_var_currency">
        <div className="div_h1">
            <h1>Доступные варианты</h1>
        </div>
        <div className="div_rates">
            {/* варианты курсов валют */}
            {currencyRates.map((item) => (
            <div className='div_rates_var'>
            <img className='logo_' src={item.icon}/>
                <div className='div_txt'>
                <div> <h3>{item.title}</h3> <h3>{item.price}</h3></div>
                <p>{item.desc}</p>
                </div>
        </div>
            ))}
        </div>

        </div>
    </div>

    )
}

export default CurrencyRates