import React from 'react'
import './walletComponent.scss'
import { Link } from 'react-router-dom';
import {walletsData} from '../Datas/walletsData'

function WalletComponent(){



    return (

        <div className='div_wallets'>
            {walletsData.map((item) => (
            <div className='div_wallet' key={item.id}>
            <img className='logo_binance' src={item.icon}/>
                <div className='div_txt_'>
                <h3>{item.title}</h3>
               <div> <p>{item.price}</p> <p>{item.word_sign}</p></div>
                </div>
        </div>
            ))}
        </div>
  
    )
}

export default WalletComponent;