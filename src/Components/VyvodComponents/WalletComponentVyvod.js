import React, { useState } from 'react'
import '../MainComponents/walletComponent.scss'
import { Link, useNavigate } from 'react-router-dom';
import wData from '../../Datas/walletsData.json'
import VyvodNaKartu from './VyvodNaKartu';

export let criptoNum;
export let clickedCriptoName;
export let clickedCriptoSign;
export let clickedCriptoCoin;

export const clickedCriptoV  = (e)=> {
   clickedCriptoName = e.title;
   clickedCriptoSign = e.word_sign;
   clickedCriptoCoin = e.available_coins;
   console.log({clickedCriptoName},
               {clickedCriptoSign},
               {clickedCriptoCoin},
       )  
}


function WalletComponentVyvod(){
    const navigate = useNavigate()

    return (

        <div className='block_wallets'>
            {wData.map((item) => (
            <div className='div_wallet' key={item.id} onClick={() => {clickedCriptoV(item); navigate(`${item.title}`)}}>
            <img className='logo_b  ' src={item.icon}/>
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

export default WalletComponentVyvod;