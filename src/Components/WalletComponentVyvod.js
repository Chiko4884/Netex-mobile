import React, { useState } from 'react'
import './walletComponent.scss'
import { Link, useNavigate } from 'react-router-dom';
import {walletsData} from '../Datas/walletsData'
import VyvodNaKartu from './VyvodNaKartu';


function WalletComponentVyvod(){
    const navigate = useNavigate()

     let [criptoNum, SetCriptoNum] = useState('')
     let [clickedCriptoName, SetClickedCriptoName] = useState()
     let [clickedCriptoSign, SetClickedCriptoSign] = useState()
     let [clickedCriptoCoin, SetClickedCriptoCoin] = useState()

    let clickedCriptoV  = (e)=> {
        SetClickedCriptoName(clickedCriptoName = e.title);
        SetClickedCriptoSign(clickedCriptoSign = e.word_sign);
        SetClickedCriptoCoin(clickedCriptoCoin = e.available_coins);
        console.log({clickedCriptoName},
                    {clickedCriptoSign},
                    {clickedCriptoCoin},
            )  
    }


    return (

        <div className='block_wallets'>
            {walletsData.map((item) => (
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