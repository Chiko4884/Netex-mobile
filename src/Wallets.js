import React from 'react'
import './wallets.scss'
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import {walletsData} from './Datas/walletsData'

function Wallets(){

    const navigate = useNavigate();


    return (
    <div className="wallets_container">
        <div className='wallets_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/main_page">Назад</Link>
            <h3>Кошельки</h3>
        </div>

        <div className='div_wallets'>
            {walletsData.map((item) => (
            <div className='div_wallet'>
            <img className='logo_binance' src={item.icon}/>
                <div className='div_txt_'>
                <h3>{item.title}</h3>
               <div> <p>{item.price}</p> <p>{item.word_sign}</p></div>
                </div>
        </div>
            ))}

            </div>
    </div>
    )
}

export default Wallets;