import React, { useState } from 'react'
import './news.scss'
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import {dataImageNews} from './Datas/dataImageNews'

export let clickNewsId;
export let clickNewsImage;
export let clickNewsHeader;
export let clickNewsContent;
export const clickedNews  = (e)=> {
    clickNewsId = e.id;
    clickNewsImage = e.image;
    clickNewsHeader = e.header;
    clickNewsContent = e.content;
    
    console.log({clickNewsId},
                {clickNewsImage},
                {clickNewsHeader},
                {clickNewsContent}
                )
}

function News(){
//  let [clickNewsId, SetClickNewsId] = useState()
//  let [clickNewsImage, SetClickNewsImage] = useState('')
//  let [clickNewsHeader, SetClickNewsHeader] = useState('')
//  let [clickNewsContent, SetClickNewsContent] = useState('')

    const navigate = useNavigate();

    
    return (
    <div className="news_container">
        <div className='news_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/main_page">Назад</Link>
            <h3>Новости</h3>
        </div>

        <div className='div_news'>
            {dataImageNews.map((item) => (
            <div className='div_new' onClick={()=>{clickedNews(item); navigate('/news_one')}}  >
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
