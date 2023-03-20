import React, { useState } from 'react'
import './news.scss'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import {dataImageNews} from './Datas/dataImageNews'
import HeaderComponent from './Components/HeaderComponent';

export let clickNewsId;
export let clickNewsImage;
export let clickNewsHeader;
export let clickNewsContent;
export const clickedNews  = (e)=> {
    clickNewsId = e.id;
    clickNewsImage = '.' + e.image;
    clickNewsHeader = e.header;
    clickNewsContent = e.content;
    
    console.log({clickNewsId},
                {clickNewsImage},
                {clickNewsHeader},
                {clickNewsContent}
                )
}

function News(){

    const navigate = useNavigate();
 
    return (
    <div className="news_container">
<HeaderComponent title = 'Новости' />

        <div className='div_news'>
            {dataImageNews.map((item) => (
            <div className='div_new' key={item.id}
            onClick={()=>{clickedNews(item);
             navigate(`${item.id}`)} } >
            <img className='news_img' src={item.image}/>
                <div className='div_txt'>
                <p>{item.id}</p> 
                <h3>{item.header}</h3>
                </div>
             </div>
            ))}
            </div>
    </div>
    )
}
export default News;
