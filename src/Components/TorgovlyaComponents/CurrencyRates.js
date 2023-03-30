import React, { useState, useEffect } from "react";
import './currencyRates.scss';
import { currencyRates } from "../../Datas/currencyRates";
import HeaderComponent from "../HeaderComponent";


const filterCurrency = (searchText, listOfCurrency)=>{
    if(!searchText) {
        return listOfCurrency;
    }
    return listOfCurrency.filter(({ title }) => 
    title.toLowerCase().includes(searchText.toLowerCase())
    );
}

function CurrencyRates(){

    const [listRates, setListRates] = useState(currencyRates)
    const [inputUpdate, setInutUpdate] = useState('')

useEffect(()=>{
    const Zaderzhka = setTimeout(() => {
        const filteredCurrency = filterCurrency(inputUpdate, currencyRates)
        setListRates(filteredCurrency)
    }, 300)
    return () => clearTimeout(Zaderzhka)
}, [inputUpdate])

    return(
        <div className="korobka_currency">
    <HeaderComponent title ='Курсы валют'/>

<div className="body_rates">
<div className="div_search">
            <h3>Пополнить баланс</h3>
            <input 
            className="search_input" 
            placeholder="Найти..."

            onChange={(e) =>setInutUpdate(e.target.value)}
            value = {inputUpdate}
            />
            <img className="search_img" src="../img/search_sign.png"/>
        </div>

        <div className="div_dostupn_var_currency">
        <div className="div_h1">
            <h1>Доступные варианты</h1>
        </div>
        <div className="div_rates">
            {/* варианты курсов валют */}
            {listRates.map((item) => (
        <div className='div_rates_var' key={item.id}>
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

    </div>

    )
}

export default CurrencyRates