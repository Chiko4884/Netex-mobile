import React, { useState } from 'react'
import './uslugi_component.scss'
import { useNavigate } from 'react-router-dom';
import {dataUslugi} from '../../../Datas/Uslugi/dataUslugi';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../../Context';


const filter = (searchText, listOfData)=>{
    if(!searchText) {
        return listOfData;
    }
    return listOfData.filter(({ title }) => 
    title.toLowerCase().includes(searchText.toLowerCase())
    );
}



function Uslugi_component(){

    const [spisokUslug, setSpisokUslug] = useState(dataUslugi)
    const [inputUpdate, setInputUpdate] = useState('')
    const navigate = useNavigate()

    const{uslugaName, setUslugaName} = useContext(CustomContext)

     const clickedUsluga  = (e)=> {
        setUslugaName(e.title);
        localStorage.setItem('uslugaName', uslugaName);
}
    useEffect(()=>{
        const Zaderzhka = setTimeout(() => {
            const filtered = filter(inputUpdate, dataUslugi)
            setSpisokUslug(filtered)
        }, 300)
        return () => clearTimeout(Zaderzhka)
    }, [inputUpdate])

    return (
        <>
            <div className="div_inp_uslugi">
            <h1>Оплата услуг</h1>
            <p>Оплата услуг</p>
            <input 
            className="poisk_inp"
            placeholder='Поик услуг...'
            onChange={(e) =>setInputUpdate(e.target.value)}
            value = {inputUpdate}
            />
            <img src="./img/search_sign.svg"/>
        </div>


        <div className="div_h1">
            <h1>Доступные варианты</h1>
        </div>

        <div className='block_uslugi'>

            {spisokUslug.map((item) => (
            <div className='div_usluga' key={item.id} onClick={() => {clickedUsluga(item); navigate(`${item.title}`)}}>
            <img className='img_u' src={item.image}/>
                <div className='div_txt_'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </div>
        </div>
            ))}

        </div>
        </>
    )
}

export default Uslugi_component;