import React, { useState, useEffect } from 'react'
import './newsOne.scss'
import { useNavigate } from "react-router"
import {clickNewsId} from './News'
import {clickNewsImage} from './News'
import {clickNewsHeader} from './News'
import {clickNewsContent} from './News'
import HeaderComponent from '../HeaderComponent';

function NewsOne(){

    const navigate = useNavigate();
useEffect(()=>{
    if(!clickNewsId){
        navigate(-1)
    }
}, [])
    return (
    <div className="news_container">
<HeaderComponent title = 'Новости'/>
        <div className='div_news'>

            <div className='div_new'>
            <img className='news_img'
             src={clickNewsImage} alt='new'/>
                <div className='div_txt'>
                <p>{clickNewsId}</p> 
                <h3>{clickNewsHeader}</h3>
                <h6>{clickNewsContent}</h6> 
                </div>
            </div>

            </div>
    </div>
    )
}

export default NewsOne;
