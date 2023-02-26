import React from 'react'
import './wallets.scss'
import { Link } from 'react-router-dom';
import {walletsData} from './Datas/walletsData'
import WalletComponent from './Components/WalletComponent';

function Wallets(){



    return (
    <div className="wallets_container">
        <div className='wallets_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/main_page">Назад</Link>
            <h3>Кошельки</h3>
        </div>
<WalletComponent/>

    </div>
    )
}

export default Wallets;