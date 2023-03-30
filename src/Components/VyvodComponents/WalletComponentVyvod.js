import React, { useState } from 'react'
import '../MainComponents/walletComponent.scss'
import './walletComponentVyvod.scss'
import { Link, useNavigate } from 'react-router-dom';
import wData from '../../Datas/walletsData.json'
import VyvodNaKartu from './VyvodNaKartu';
import { useEffect } from 'react';

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

const filterCoins = (searchText, listOfCoins)=>{
    if(!searchText) {
        return listOfCoins;
    }
    return listOfCoins.filter(({ title }) => 
    title.toLowerCase().includes(searchText.toLowerCase())
    );
}

function WalletComponentVyvod(){

    const [spisokMonet, setSpisokMonet] = useState(wData)
    const [inputUpdate, setInutUpdate] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const Zaderzhka = setTimeout(() => {
            const filteredWallet = filterCoins(inputUpdate, wData)
            setSpisokMonet(filteredWallet)
        }, 300)
        return () => clearTimeout(Zaderzhka)
    }, [inputUpdate])

    return (
        <>
            <div className="div_inp_monety">
            <h1>Вывод на карту</h1>
            <p>Выберите тип монет</p>
            <input 
            className="poisk_inp"
            placeholder='Поик монет...'
            onChange={(e) =>setInutUpdate(e.target.value)}
            value = {inputUpdate}
            />
            <img src="./img/search_sign.svg"/>
        </div>


        <div className="div_h1">
            <h1>Доступные варианты</h1>
        </div>

        <div className='block_wallets'>

            {spisokMonet.map((item) => (
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
        </>
    )
}

export default WalletComponentVyvod;