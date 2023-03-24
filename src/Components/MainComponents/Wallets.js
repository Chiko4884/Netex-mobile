import React from 'react'
import './wallets.scss'
import HeaderComponent from '../HeaderComponent';
import WalletComponent from './WalletComponent';

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