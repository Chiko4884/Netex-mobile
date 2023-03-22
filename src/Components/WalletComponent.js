import React from 'react'
import './walletComponent.scss'
import { Link } from 'react-router-dom';
import wData from '../Datas/walletsData.json'

function WalletComponent(props){



    return (

        <div className='block_wallets'>
            {wData.map((item) => (
            <div className='div_wallet' key={item.id}>
            <img className='logo_binance' src={item.icon}/>
                <div className='div_txt_'>
                <h3>{item.title}</h3>
               <div> <p>{Number(item.price).toFixed(8)}</p> 
               <p>{item.word_sign}</p></div>
                </div>
        </div>
            ))}
        </div>
  
    )
}

export default WalletComponent;