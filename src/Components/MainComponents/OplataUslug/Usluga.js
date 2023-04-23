import React, { useContext, useEffect, useState } from "react";
import './usluga.scss';
import UserComponent from "../UserComponent";
import HeaderComponent from "../../HeaderComponent";
import { useNavigate } from "react-router-dom";
import {dataSvet} from '../../../Datas/Uslugi/dataSvet'
import { CustomContext } from "../../../Context";

function Usluga(){
    const [spisokUslug, setSpisokUslug] = useState([])
    const navigate = useNavigate()
    const{uslugaName, clickedItemId, setClickedItemId } = useContext(CustomContext)
console.log(uslugaName)
    useEffect(()=>{
        if(uslugaName === 'Свет'){
            setSpisokUslug(dataSvet)
        }
    },[dataSvet])

    const clickedUslugaItem  = (e)=> {
        setClickedItemId(e.title);
        localStorage.setItem('clickedItemId', e.title);
        console.log(clickedItemId)  
    }

    return(

        <div className="korobka_usluga">
<HeaderComponent title ={uslugaName}/>
<div className="oplata_body">
        <UserComponent/>

        <div className="div_h1">
            <h1>Доступные варианты</h1>
        </div>

        <div className='block_uslugi'>

            {spisokUslug.map((item) => (
            <div className='div_usluga' key={item.id} onClick={() => {clickedUslugaItem(item); navigate(`${item.title}`)}}>
            <img className='img_u' src={item.image}/>
                <div className='div_txt_'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </div>
        </div>
            ))}

        </div>

        </div>
        
    </div>

    )
}

export default Usluga;