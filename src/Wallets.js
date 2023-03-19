import React from 'react'
import './wallets.scss'
import { Link } from 'react-router-dom';
import {walletsData} from './Datas/walletsData'
import WalletComponent from './Components/WalletComponent';
import HeaderComponent from './Components/HeaderComponent';

function Wallets(){



    return (
    <div className="wallets_container">
        <HeaderComponent title = 'Кошельки'/>
       <div className='body_wallets'>
        <WalletComponent/>
        </div>
    </div>
    )
}

export default Wallets;