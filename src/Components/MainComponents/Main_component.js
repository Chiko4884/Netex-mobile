import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './main_component.scss'
import {crypto} from '../../Datas/Crypto_data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataImageNews} from '../../Datas/dataImageNews'
import {funcData} from '../../Datas/funcData'
import UserComponent from './UserComponent';
import { useState } from 'react';



function Main_component(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      };

    const navigate = useNavigate()

    const clickedOption  = (e)=> {
        if (e.title == 'Оплата услуг'){navigate('/oplata_uslug')}
        if (e.title == 'P2P'){navigate('/p2p')}
       console.log(e.title )  
    }

return  (

        <div className='korobka_main'>
        <div className='main_head'> </div>
        <div className='div_running_line'>
            {crypto.map((item) => (
            <div className='card_valuta' key={item.id} >
                    <img src={item.icon_coin} alt={item.name_coin}/>
                    <h3 >{item.name_coin}</h3>
                    <h6 >{item.price}</h6>
                    <p>{item.change}</p>
                    <p>({item.change_procent})</p>
            </div>
            ))}
        </div>
        <UserComponent className='user'/>
        <div className='div_big'>
            <div className='bold_line'></div>
            <div className='div_news'>
                <div className='div_z'>
                    <h3>Последние новости</h3>
                    <Link className='link-forgot'
                to="/news"><p className="open_wallets">Посмотреть всё</p></Link>
                </div>
                <div className='div_slide_news'>
         <Slider className='slideStyle' {...settings}>
               {dataImageNews.map((item) => (
                <div key={item.id} className='div_slider'>
                     <img className='slide_img' src={item.image} alt={item.id}/>
                     <h1>{item.header}</h1>
                </div>
                  ))}
         </Slider>
                </div>
            </div>
            <div className='div_func'>
            {funcData.map((item) => (
            <div key={item.id} className='div_func1' onClick={()=> {clickedOption(item)}}>
                    <img src={item.image} alt={item.name_coin}/>
                    <div className='div_txt_func'>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
            </div>
            ))}
            </div>
            <div className='div_wallets'>
                <div className='div_z'>
                    <h3>Ваши кошельки</h3>
                    <Link className='link-forgot'
                to="wallets"><p className="open_wallets">Посмотреть всё</p></Link>
                
                </div>
                <div className='div_bin_bit'>
                <div className='div_binance'>
                <img className='logo_binance' src='./img/logo_binance.png'/>
                    <div className='div_txt'>
                    <h3>Binance</h3>
                   <div> <p>0.00000000</p> <p>BNB</p></div>
                    </div>
                </div>
                <div className='div_bitcoin'>
                <img className='logo_bitcoin' src='./img/logo_bitcoin.png'/>
                    <div className='div_txt'>
                    <h3>Bitcoin</h3>
                   <div> <p>0.00000000</p> <p>BTC</p></div>
                    </div>
                </div>
                </div>
            </div>

        </div>
        </div>

    
  
    )
    
}

export default Main_component;