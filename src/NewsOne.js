import React, { useState } from 'react'
import './newsOne.scss'
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import {dataImageNews} from './Datas/dataImageNews'
import {clickNewsId} from './News'
import {clickNewsImage} from './News'
import {clickNewsHeader} from './News'
import {clickNewsContent} from './News'

function NewsOne(){

    const navigate = useNavigate();
    return (
    <div className="news_container">
        <div className='news_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/news">Назад</Link>
            <h3>Новости</h3>
        </div>

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
